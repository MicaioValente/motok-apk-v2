import * as S from './styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'
const Tab = createBottomTabNavigator();

export default function BottomTabs() {



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