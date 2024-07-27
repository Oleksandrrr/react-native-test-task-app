import { StackScreenProps } from '@react-navigation/stack'
import { Activities } from '../../../api/api'

export type RootStackParamList = {
  Home: undefined
  ActivityDetailsScreen: { item: Activities }
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>
