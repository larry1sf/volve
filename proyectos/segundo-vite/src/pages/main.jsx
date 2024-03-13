import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/index.css';
// import App from './App.jsx';
// import ListGifs from './ListGifs.jsx';
// import UseEffect from './UseEffect.jsx';
import ApiFetch from '../components/ApiFetch';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {/* <App /> */}
    {/* <ListGifs></ListGifs>  con botones para cambias la lista.*/}
    {/* <UseEffect></UseEffect>  cambia una ves al primir el boton demuestra el efecto.*/}
    <ApiFetch></ApiFetch>{/* usando una api con el metodo fetch y sananco listas*/}
  </React.Fragment>
);
