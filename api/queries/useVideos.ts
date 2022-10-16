import server from '../client/server'
import { useQuery } from '@tanstack/react-query'

export const useVideos = () => {
  return useQuery(['videos'], () => server.get('/video'))
}
