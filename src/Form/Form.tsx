import { countries } from "../data/countries";
import "./Form.modules.css";

export default function Form() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="city">Ciudad:</label>
        <input type="text" id="city" name="city" placeholder="Ciudad" />
      </div>

      <div className="field">
        <label htmlFor="country">País:</label>
        <select>
          <option value="">-- Seleccione Un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    <input 
      type="submit" 
      value="Consultar Clima"
      className="submit"/>
    </form>
  );
}
