import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import {Feather} from '@expo/vector-icons';
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
} from './styles';

export function Profile() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSingOut() {
    
  }
  
  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton 
            color={theme.colors.shape} 
            onPress={handleBack} 
          />
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <LogoutButton onPress={handleSingOut}>
            <Feather 
              name="power" size={24} 
              color={theme.colors.shape}
            />
          </LogoutButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{uri: 'https://github.com/NyndoND.png'}}/>
        </PhotoContainer>
      </Header>

    </Container>
  );
}