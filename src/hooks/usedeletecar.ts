import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'

export const usedeletecar = async (carId: number): Promise<void> => {
  try {
    const response = await fetch(`${apiUrl}/cars/${carId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(error || 'Failed to delete car')
    }
  } catch (error) {
    console.error('Delete car error:', error)
    throw error
  }
}
