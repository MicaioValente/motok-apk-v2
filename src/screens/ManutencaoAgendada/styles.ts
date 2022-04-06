import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import MaoMotoSVG from '../../assets/manutencaoAgendada.svg'

export const Container = styled.View`
    flex: 1;
    background-color: #1B191A;
    align-items: center;
    justify-content: center;
`

export const Icon = styled(MaoMotoSVG)`
    margin-bottom: ${RFValue(40)}px;


`
export const Title = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(32)}px;
    text-transform: uppercase;

`
export const ContainerSubTiitle = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: ${RFValue(40)}px;
`

export const SubTitle = styled.Text`
    color: #fff;
    align-items: center;
    font-family: "Teko_400Regular";
    font-size: ${RFValue(20)}px;
`

export const Button = styled.TouchableOpacity`
    width: ${RFValue(200)}px;
    height: ${RFValue(48)}px;
`

export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(20)}px;
    text-transform: uppercase;
`

