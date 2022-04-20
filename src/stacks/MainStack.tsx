import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading'
import { 
    useFonts, 
    Teko_300Light, 
    Teko_400Regular, 
    Teko_500Medium, 
    Teko_600SemiBold, 
    Teko_700Bold 
} from '@expo-google-fonts/teko'
import Preload from '../screens/Preload'
import SignIn from '../screens/SignIn'
import RegisterCPForCNPJ from '../screens/Register'
import RegisterCPF from '../screens/RegisterCPF'
import RegisterCNPJ from '../screens/RegisterCNPJ'
import CadastroFinalizado from '../screens/CadastroFinalizado'
import ManutencaoAgendada from '../screens/ManutencaoAgendada'
import PagamentoEmAnalise from '../screens/PagamentoEmAnalise'
import Presentation from  '../screens/Presentation'
import ShowPlans from "../screens/ShowPlans";
import BottomTabs from './BottonStack'
import NovaManuntencao from '../screens/NovaManuntencao'
import ContratarPlano from '../screens/ContratarPlano'

const Stack = createStackNavigator();

export default function MainStack() {
    let [fontsLoaded] = useFonts({
        Teko_300Light, Teko_400Regular, Teko_500Medium, Teko_600SemiBold, Teko_700Bold
      });
 
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <Stack.Navigator
            initialRouteName="ShowPlans"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />

            <Stack.Screen name="Presentation" component={Presentation} />

            <Stack.Screen name="ContratarPlano" component={ContratarPlano} />

            <Stack.Screen name="ShowPlans" component={ShowPlans} />

            <Stack.Screen name="SignIn" component={SignIn} />

            <Stack.Screen name="Register" component={RegisterCPForCNPJ} />

            <Stack.Screen name="RegisterCPF" component={RegisterCPF} />

            <Stack.Screen name="RegisterCNPJ" component={RegisterCNPJ} />

            <Stack.Screen name="CadastroFinalizado" component={CadastroFinalizado} />

            <Stack.Screen name="ManutencaoAgendada" component={ManutencaoAgendada} />

            <Stack.Screen name="PagamentoEmAnalise" component={PagamentoEmAnalise} />

            <Stack.Screen name="NovaManuntencao" component={NovaManuntencao} />

            <Stack.Screen name="Home" component={BottomTabs} /> 

        </Stack.Navigator>
    );
}
