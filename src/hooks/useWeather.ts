import axios from 'axios'
import { z } from 'zod'
import { SearchType } from '../types'

// ZOD
// Creamos primero el schema que será una especia de Type
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})

type Weather = z.infer<typeof Weather>

export default function useWeather () {

    const fecthWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // ZOD Guards
            const { data : weatherResult} = await axios(weatherUrl)
            const result = Weather.safeParse(weatherResult)

            if(result.success) {
                console.log(result.data.name)
                console.log(result.data.main.temp)
            }
            

        } catch (error) {
            console.log(error)
            console.log('consultando la sapa perra API')
        }

    }

    return {
        fecthWeather
    }
}