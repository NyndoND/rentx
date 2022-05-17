import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { BorderlessButton } from "react-native-gesture-handler";

import {
  Container,
  InputText,
  IconContainer,
} from './styles';



interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;

}

export function InputPassword({
  iconName,
  value,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPassworVisible] = useState(true);
  
  const theme = useTheme();



  function handleFocused(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange(){
    setIsPassworVisible(prevState => !prevState);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}

        />
      </IconContainer>

      <InputText 
        onFocus={handleFocused}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        isFocused={isFocused}
        autoCorrect={false}
        {...rest} 
      />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}