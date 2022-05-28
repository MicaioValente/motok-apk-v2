import * as S from './styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'
import { useEffect, useState } from 'react';
import { UserGetById } from '../components/CardPlano/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../service/api';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [ user, setUser] = useState<UserGetById>({} as UserGetById)

  useEffect(() => {
    const checkToken = async () => {
        const token = await AsyncStorage.getItem('user');
        const {idCliente} = JSON.parse(token) 
        api.get(`clientes/${idCliente}`).then(function (response ){
            delete response.data.arquivoBase64DocCarteira
            delete response.data.arquivoBase64DocResidencia
            setUser(response.data)
        }).catch(function (error){
        })
    }
    checkToken();
  }, []);
  return (
    <Tab.Navigator
        initialRouteName={'HomeTap'}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#343438', 
            borderTopWidth: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute'
          },
          tabBarActiveTintColor: '#F14902',
          tabBarInactiveTintColor: '#FEBB9A'
        })}
    >
      <Tab.Screen 
          name="HomeTap" 
          component={Home}
          options={{
              tabBarActiveTintColor: '#F14902',
              // tabBarStyle: {backgroundColor: '#343438',borderTopWidth: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20},
              tabBarLabel: 'Planos',
              tabBarIcon: ({ color, size }) => (
                <S.Home />
          )}}
        />
        <Tab.Screen 
          name="Perfil" 
          component={Perfil}
          options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({ color, size }) => (
                <S.Perfil/>
          )}} />
    </Tab.Navigator>
  );
}