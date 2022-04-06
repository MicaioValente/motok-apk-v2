import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import CameraSVG from '../../assets/camera.svg';
import ImagemSVG from '../../assets/image.svg';

export const CameraIcon = styled(CameraSVG)`

`
export const ImagemIcon = styled(ImagemSVG)`

`

export const ContainerIcon = styled.TouchableOpacity`

`

export const ContainerIcons = styled.View`
    flex-direction: row ;
    height: ${RFValue(60)}px;
    justify-content:  space-around;
    align-items: center;
    margin-top: ${RFValue(10)}px;
`

export const Container = styled.View`
    width: ${RFValue(300)}px;
    background-color: #343438;
    /* height: ${RFValue(230)}px; */
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
    border-radius: ${RFValue(20)}px;
    justify-content: space-between;
`;

export const Content = styled.View`
    background-color: #1B191A;
    width: ${RFValue(260)}px;
    height: ${RFValue(120)}px;
    border-radius: ${RFValue(10)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`;

export const ContentImagem = styled.View`
    width: ${RFValue(260)}px;
    height: ${RFValue(140)}px;
    align-items: center;
`;

export const Imagem = styled.Image`
    width: 100%;
    height: ${RFValue(140)}px;
`;

export const ContainerText = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(28)}px;
    font-family: "Teko_300Light";
    color: #71717A;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(50)}px;
    margin-top: 20px;
`
export const ContainerButton = styled.View`
    width: 100%;
    height: ${RFValue(34)}px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const ContainerButtonEnviar = styled.TouchableOpacity`
    background-color: #1B191A;
    height: 100%;
    width: ${RFValue(210)}px;
    justify-content: center;
    border-radius: ${RFValue(10)}px;
    align-items: center;
`

export const TextButtonEnviar = styled.Text`
    color: #F14902;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
`

export const ContainerLixeira = styled.TouchableOpacity`
    width: ${RFValue(40)}px; 
    height: 100%;
    border-radius: ${RFValue(10)}px;
    background-color: #1B191A;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: #1B191A;
    font-family: "Teko_500Medium";
    font-size: ${RFValue(18)}px;
`

export const TitleModal = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: "Teko_700Bold";
    color: #fff;
    margin-top: ${RFValue(10)}px;
`

export const SubTitleModal = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: "Teko_300Light";
    margin-top: ${RFValue(10)}px;
    color: #D4D4D8;
`

export const SubTitleModalPre = styled.Text`
    width: 100%;
    font-size: ${RFValue(18)}px;
    font-family: "Teko_300Light";
    margin-top: ${RFValue(10)}px;
    color: #fff;

`

export const ContainerButtonModal = styled.View`
    width: 100%;
    height: ${RFValue(34)}px;
    margin-top: ${RFValue(10)}px;
    flex-direction: row;
    justify-content: space-between;
`

export const Row = styled.View`
    width: 100%;
    margin-right: auto;
    height: ${RFValue(25)}px;
    flex-direction: row;
    align-items: center;
`

export const Ball = styled.View`
    background-color: #FA7311;
    height: ${RFValue(10)}px;
    width: ${RFValue(10)}px;
    margin-right: ${RFValue(15)}px;
    border-radius: 20px;

`
export const ContainerTextRow = styled.View`

`

export const TextRow = styled.Text`
    font-family: "Teko_400Regular";
    font-size: ${RFValue(18)}px;
    color: #E4E4E7;
`

export const TextRowBold = styled.Text`
    font-family: "Teko_600SemiBold";
    font-size: ${RFValue(18)}px;
    color: #E4E4E7;
`

export const ContainerButtonPre = styled.TouchableOpacity`
    background-color: #18181B;
    width: 100%;
    height: ${RFValue(34)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
`
