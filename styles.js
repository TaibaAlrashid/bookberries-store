import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  height: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const ShopTitle = styled.Text`
  font-size: 25px;
  font-style: italic;
`;

export const TopStyling = styled.View`
  height: 65%;
  align-items: center;
  justify-content: center;
`;
export const BottomStyling = styled.View`
  height: 15%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: white;
  font-size: 22px;
`;

export const ListWrapper = styled.View`
  margin-top: 50px;
`;

export const ShopListWrapper = styled.View`
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;

export const ShopItemStyled = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const CartButtonStyled = styled(Feather)`
  color: white;
  margin-right: 10px;
`;
export const CartTextStyled = styled.Text`
  color: white;
  font-size: 20px;
`;

export const DeleteIcon = styled(Feather)`
  color: ${(props) => props.theme.grey};
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.backgroundColor};
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 20px;
`;

export const AppText = styled.Text``;
