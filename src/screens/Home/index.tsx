import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import NetInfo from '@react-native-community/netinfo';
import {synchronize} from '@nozbe/watermelondb/sync';

import { database } from '../../database';
import {Car as ModelCar} from '../../database/model/Car';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';

import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

export function Home() {

  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<ModelCar[]>([]);

  const netInfo = NetInfo.useNetInfo();
  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car })
  }

  async function offlineSynchronize(){
    await synchronize({
      database,
      pullChanges: async ({lastPulledAt})=>{
        const response = await api
        .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);

        const { changes, latestVersion} = response.data;
        return {changes, timestamp: latestVersion}
      },
      pushChanges: async({changes})=> {
        const user = changes.users;
        await api.post(`/users/sync`, user);
      },
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchCars() {

      try {
        
        const carColletion = database.get<ModelCar>('cars');
        const cars = await carColletion.query().fetch();


        if (isMounted) {
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchCars();
    return ()=> {
      isMounted = false;
    };
  }, []);

  useEffect(()=> {
    if(netInfo.isConnected === true){
      offlineSynchronize();
    }
  },[netInfo.isConnected])

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          {
            !loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>
      {
        loading ? <LoadAnimation /> :
          <CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Car data={item} onPress={() => handleCarDetails(item)} />}
          />
      }

    </Container>
  );
}
