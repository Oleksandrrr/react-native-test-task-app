import RootRouter from '@/screens/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const client = new QueryClient()

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <QueryClientProvider client={client}>
          <StatusBar backgroundColor="transparent" translucent />
          <GestureHandlerRootView>
            <NavigationContainer>
              <Root />
            </NavigationContainer>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App
