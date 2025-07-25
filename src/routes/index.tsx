import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import AppStatusBar from '../components/AppStatusBar';
import ROUTES from '../utils';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Reducer';

export type AuthParams = {
  AuthStack: undefined,
  MainStack: undefined,
  OTPScreen: {
    type: string,
    id: number,
  },
  ForgetPassword: {
    id: number,
    code: number,
  },
  ResetPasswordScreen: undefined,
  Points: undefined
}

const Stack = createNativeStackNavigator<AuthParams>();


const Routes = () => {

  const { token } = useSelector((state: RootState) => state.authReducer)

  return (
    <>
      <AppStatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
          }}>
          {token ?
            <Stack.Screen name={ROUTES.MainStack} component={MainStack} />
            :
            <Stack.Screen name={ROUTES.AuthStack} component={AuthStack} />
          }

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
