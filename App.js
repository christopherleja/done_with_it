import React, { useState } from 'react';
import { AppLoading } from 'expo'

import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import AppNavigator from './src/navigation/AppNavigator';
import OfflineNotice from './src/components/OfflineNotice';
import AuthContext from './src/auth/context';
import authStorage from './src/auth/storage';

export default function App() {
  const [ user, setUser ] = useState()
  const [ isReady, setIsReady ] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user);
  }

  if (!isReady) 
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)}/>
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

