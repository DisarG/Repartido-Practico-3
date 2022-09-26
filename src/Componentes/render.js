import React, { useState } from 'react'
import { Imagenes } from './datos'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.css'


const DatosRender = ({ carrusel }) => {
  const [Imagen, setImagen] = useState(0)
  const tamaño = carrusel.length;
  const Siguiente = () => {
    setImagen(Imagen === tamaño - 1 ? 0 : Imagen + 1)
  };


  const Anterior = () => {
    setImagen(Imagen === 0 ? tamaño - 1 : Imagen - 1)
  }
  console.log(Imagen)

  if (!Array.isArray(carrusel) || tamaño <= 0) {
    return null;
  }

  return (
    <section className='carrusel'>
      <FaArrowAltCircleLeft className="leftArrow" onClick={Anterior} />
      <FaArrowAltCircleRight className="rightArrow" onClick={Siguiente} />
      {Imagenes.map((dato, index) => {
        return (
          <div className={index === Imagen ? 'slide activo' : 'slide'} key=
            {index}
          > {index === Imagen && (
          <img src={dato.img} alt="Carrusel" width="600px" height="450px" className='image' />
          )}

          </div>
        )
      })}
    </section>
  )
}

export default DatosRender