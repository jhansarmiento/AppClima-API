import axios from 'axios'
import { object, string, number, InferOutput, parse } from 'valibot'
import { SearchType } from '../types'

// Valibot
// Al igual que en ZOD creamos primero el schema que será una especia de Type
const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })
})

type Weather = InferOutput<typeof WeatherSchema>

export default function useWeather () {

    const fecthWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl)
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // Valibot Guards
            const { data : weatherResult} = await axios(weatherUrl)
            const result = parse(WeatherSchema, weatherResult)

            if(result) {
                console.log(result.name)
                console.log(result.main.temp)
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