import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import SetaSVG from '../../assets/seta.svg'

export const Container = styled.TouchableOpacity`
    height: ${RFValue(55)}px;
    width: ${RFValue(310)}px;
    margin-bottom: ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    align-items: center;
    flex-direction: row;
    background-color: ${({BGcolor}) => BGcolor};
    padding: 0 ${RFValue(20)}px;
    justify-content: space-between;
`;  

export const SetaEsquerda = styled(SetaSVG)``

export const TextBold = styled.Text`
    color: #D4D4D8;
    align-items: center;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
    color: ${({color}) => color};
`
