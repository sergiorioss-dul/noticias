import React, { Fragment, useState,useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import axios from 'axios';

function App() {

  const [ categoria,guardarCategoria ] = useState('');
  const [ noticias,guardarNoticias ] = useState([]);

  useEffect(()=>{
    const consultarAPI = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=7bcaadc6a9e84106bd3b1f69ca720edc`;
      const res = await axios.get(url);
      guardarNoticias(res.data.articles);
      /*const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);*/
    }
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header title='Buscador de Noticias'/>
      <div className="container white">
        <Formulario
          guardarCategoria = { guardarCategoria }
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
