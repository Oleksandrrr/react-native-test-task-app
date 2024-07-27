import Config from 'react-native-config'
// import { API_URL } from '@env'

export interface Activities {
  id: number
  photoUrl: string
  name: string
  description: string
  location: string
  price: number
  rating: number
}

export async function fetchActivities(): Promise<Activities[]> {
  const url = `${Config.API_URL}activities`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }
  const json = await res.json()
  return json
}
