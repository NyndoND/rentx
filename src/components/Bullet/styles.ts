import styled from "styled-components/native";
import { Props } from ".";

export const Container = styled.View<Props>`
  width: 6px;
  height: 6px;

  background-color: ${({theme, active})=> 
  active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;