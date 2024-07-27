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

export const fetchActivities = async (): Promise<Activities[]> => {
  const url = `${Config.API_URL}activities`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const json = (await res.json()) as Activities[]
  return json
}

export const addFavorite = async (id: number): Promise<string | null> => {
  const res = await fetch(`${Config.API_URL}favorites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  const json = await res.json()
  return json as string | null
}
