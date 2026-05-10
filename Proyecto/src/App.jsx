import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import canastaIcon from './assets/canasta.png'
import hornoIcon from './assets/Horno.png'
import logoIcon from './assets/logo.png'
import menuIcon from './assets/menu.png'
import cajaIcon from './assets/caja.png'
import userIcon from './assets/user.png'
import flechaIcon from './assets/flecha.png'
import carroIcon from './assets/carro.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex flex-row">
        <div className="p-2">
          <a href='#' className="link-offset-2 link-underline link-underline-opacity-0 link-dark">
            <img src={canastaIcon} width="30" height="30" />
            Supermercado
          </a>
        </div>
        <div className="p-2">
          <a href='#' className="link-offset-2 link-underline link-underline-opacity-0 link-dark">
            <img src={hornoIcon} width="30" height="30" />
            Electro y Hogar
          </a>
        </div>
      </div>
      <div className="d-flex align-items-center" style={{ backgroundColor: '#CC292E' }}>
        <div className="d-flex align-items-center justify-content-start px-3">
          <div>
            <a href='#'></a>
            <img src={logoIcon} width="180" height="80" />
          </div>
          <div>
            <button type="button" className="btn btn-link link-offset-2 link-underline link-underline-opacity-0 link-light d-flex align-items-center">
              <img src={menuIcon} width="50" height="30" />
              Menú</button>
          </div>
          <div className="col-auto">
            <input type="text" className="form-control rounded-pill " placeholder="¿Qué estás buscando?" style={{ width: '700px', height: '40px' }} />
          </div>
        </div>
        <div className="d-flex align-items-center ms-auto px-3">
          <div>
            <button type="button" className="btn btn-link link-offset-2 link-underline link-underline-opacity-0 link-light d-flex align-items-center">
              <img src={cajaIcon} width="40" height="30" />
              Mis pedidos</button>
          </div>
          <div>
            {/*Temporal hay que cambiarlo por un desplegable*/}
            <button type="button" className="btn btn-link link-offset-2 link-underline link-underline-opacity-0 link-light d-flex align-items-center">
              <img src={userIcon} width="40" height="30" />
              Mi cuenta
              <img src={flechaIcon} width="40" height="30" />
            </button>
          </div>
          <div>
            {/*Temporal hay que cambiarlo por un desplegable*/}
            <a href='#'></a>
            <img src={carroIcon} width="40" height="40" />
          </div>
        </div>
      </div>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{ height: "50px" }}>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <img src={cajaIcon} class="d-block w-25 mx-auto" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={userIcon} class="d-block w-25 mx-auto" alt="..."/>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={carroIcon} class="d-block w-25 mx-auto" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )

}

export default App
