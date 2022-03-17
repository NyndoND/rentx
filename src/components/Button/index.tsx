import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import theme from "../../styles/theme";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) {
  return (
    <Container
      enabled={enabled}
      color={color}
      style={{
        opacity: (enabled === false || loading === true) ? .5 : 1,
        backgroundColor: color ? color : theme.colors.main,

      }}
      {...rest}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}