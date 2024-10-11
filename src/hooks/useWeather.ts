import axios from 'axios'
import { SearchType } from '../types'

export default function useWeather () {

    const fecthWeather = async (search : SearchType) => {

        const appId = '140a7e5dffe9543918892d68bc49318c'
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const data = await axios(geoUrl)
            console.log(data)

        } catch (error) {
            console.log(error)
            console.log('consultando la sapa perra API')
        }

    }

    return {
        fecthWeather
    }
}