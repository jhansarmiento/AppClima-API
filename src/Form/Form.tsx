import { useState, ChangeEvent, FormEvent } from "react";
import type { SearchType } from "../types";
import { countries } from "../data/countries";
import "./Form.modules.css";
import Alert from "../Alert/Alert";

type FormProps = {
  fecthWeather: (search: SearchType) => Promise<void>
}

export default function Form({fecthWeather} : FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState('')

  const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(search).includes('')) {
      setAlert("Llena todos los campos perro!")
      return
    }
    fecthWeather(search)
  }

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
    >
      {alert && <Alert>
        {alert}
      </Alert>}
      <div className="field">
        <label htmlFor="city">Ciudad:</label>
        <input 
          type="text" 
          id="city" 
          name="city" 
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
          />
      </div>

      <div className="field">
        <label htmlFor="country">País:</label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione Un País --</option>
          {countries.map((country) => (
            <option 
              key={country.code} 
              value={country.code}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consultar Clima" className="submit" />
    </form>
  );
}
