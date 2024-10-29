import axios from 'axios'
import { z } from 'zod'
import { useMemo, useState } from 'react'
import { SearchType } from '../types'

// ZOD
// creamos primero el schema que será una especia de Type
const WeatherSchema = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})
export type Weather = z.infer<typeof WeatherSchema>

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
    }
}

export default function useWeather () {

    const [ weather, setWeather] = useState<Weather>(initialState)

    const [ loading, setLoading] = useState(false)

    const [notFound, setnotFound ] = useState(false)

    const fecthWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY

        setLoading(true)
        setWeather(initialState)
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)

            // Comprueba si existe la Ciudad buscada
            if(!data[0]) {
                setnotFound(true)
                return
            }

            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // ZOD Guards
            const { data : weatherResult} = await axios(weatherUrl)
            const result = WeatherSchema.safeParse(weatherResult)

            if(result.success) {
                setWeather(result.data)
            }
            

        } catch (error) {
            console.log(error)
            console.log('consultando la API')
        } finally {
            setLoading(false)
        }

    }

    const hasWeatherData = useMemo(() => weather.name ,[weather])


    return {
        weather,
        loading,
        notFound,
        fecthWeather,
        hasWeatherData
    }
}