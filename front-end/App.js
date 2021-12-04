import 'react-native-gesture-handler';

import { AuthContext, DataProvider } from './src/Services/data';
import React, { useMemo, useState } from 'react';

import Deslogado from './src/Routes/deslogado';
import Logado from './src/Routes/logado';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [logado, setLogado] = useState(false);

  const authcontext = useMemo(() => ({
    signIn: () => {
      setLogado(true);
    },
    signOut: () => {
      setLogado(false);
    }
  }));

  return (
    <AuthContext.Provider value={authcontext}> 
      <DataProvider>
        <NavigationContainer>
          <PaperProvider>
            {logado ? <Logado /> : <Deslogado />}
          </PaperProvider>
        </NavigationContainer>
      </DataProvider>
    </AuthContext.Provider>
  );
}


