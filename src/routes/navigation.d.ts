//declarar globalmente que a lista de parametros 
// vai usar a tipagem declarada, no caso vamos usar a padrão

import { ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation{
    interface RootParamList extends ParamListBase {}
  }
}