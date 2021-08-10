import { Fragment, useState, useEffect } from "react";
import { Contenedor } from "./componentes/Contenedor";
import { Header } from "./componentes/Header";


function App() {
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: "",
    pais: "",
  });
  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  // const [ error , guardarError ] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    if (consultar) {
      const consultarAPI = async () => {
        const apiKey = "741fdd18dea226a9ccfad2a5f9e35c95";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

        const data = await fetch(url);
        const respuesta = await data.json();
        guardarResultado(respuesta);
      };
      consultarAPI();
      guardarConsultar(false);
    }
  }, [ consultar, resultado ]);
  
  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <Contenedor
        busqueda={busqueda}
        guardarBusqueda={guardarBusqueda}
        guardarConsultar={guardarConsultar}
        resultado={resultado}
      />
    </Fragment>
  );
}

export default App;
