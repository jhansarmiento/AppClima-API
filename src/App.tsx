import "./App.modules.css";
import Form from "./Form/Form";
import useWeather from "./hooks/useWeather";

function App() {

  const { fecthWeather } = useWeather()

  return (
    <>
      <h1 className="title">Buscador De Clima</h1>
      <div className="container">
        <Form 
          fecthWeather={fecthWeather}
        />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
