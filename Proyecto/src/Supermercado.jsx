import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'
import canastaIcon from './assets/canasta.png'
import hornoIcon from './assets/Horno.png'
import logoIcon from './assets/logo.png'
import menuIcon from './assets/menu.png'
import cajaIcon from './assets/caja.png'
import userIcon from './assets/user.png'
import carroIcon from './assets/carro.png'
import PlazaVea_2Icon from './assets/PlazaVea_2.png'
import chelaIcon from './assets/chela.png'
import miloIcon from './assets/milo.png'
import limpiezaIcon from './assets/limpieza.png'

function Supermercado() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* Agrega un id al contenedor principal para volver al inicio */}
            <div id="top"></div>

            {/* Barra de navegación superior */}
            <div className="d-flex flex-row">
                <div className="p-2">
                    <Link to="/supermercado" className="link-offset-2 link-underline link-underline-opacity-0 link-dark">
                        <img src={canastaIcon} width="30" height="30" />
                        Supermercado
                    </Link>
                </div>
                <div className="p-2">
                    <a href='#' className="link-offset-2 link-underline link-underline-opacity-0 link-dark">
                        <img src={hornoIcon} width="30" height="30" />
                        Electro y Hogar
                    </a>
                </div>
            </div>

            {/* Barra de navegación principal */}
            <div className="d-flex align-items-center sticky-top" style={{ backgroundColor: '#CC292E' }}>
                <div className="d-flex align-items-center justify-content-start px-3">
                    <div>
                        <Link to="/">
                            <img src={logoIcon} width="180" height="80" />
                        </Link>
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
                        <div className="btn-group">
                            <button type="button" className="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={userIcon} width="40" height="30" />
                                Mi cuenta
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#loginModal">
                                        Iniciar sesión
                                    </button>
                                </li>
                                <li><a className="dropdown-item" href="#">Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Mis pedidos</a></li>
                                <li><a className="dropdown-item" href="#">Dirección de entrega</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {/*Temporal hay que cambiarlo por un desplegable*/}
                        <a href='#'></a>
                        <img src={carroIcon} width="40" height="40" />
                    </div>
                </div>
            </div>

            {/* Modal de inicio de sesión */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Inicia sesión</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Correo electrónico</h5>
                            <input type="email" className="form-control mb-3" placeholder="Ej: juan@plazavea.com" />
                            <h5>Contraseña</h5>
                            <input type="password" className="form-control mb-3" />

                            <button className="btn btn-danger rounded-pill w-100 mb-2">Continuar</button>
                        </div>
                        <div className="modal-footer">
                            <a href="#">¿Eres nuevo? Regístrate</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carrusel de imágenes */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={chelaIcon} className="d-block p-2 mx-auto" style={{ height: "300px" }} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={limpiezaIcon} className="d-block p-2 mx-auto" style={{ height: "300px" }} alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={miloIcon} className="d-block p-2 mx-auto" style={{ height: "300px" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Texto de promociones "Solo por hoy" */}
            <div className="mt-2" style={{ backgroundColor: '#FC0A59' }}>
                <div className="d-flex align-items-center justify-content-center px-3">
                    <img src={PlazaVea_2Icon} className="d-block" style={{ height: "50px" }} />
                    <h2 className='text-light'>¡Solo por hoy!</h2>
                </div>
            </div>

            {/* Sección de productos */}
            <div className='p-2'>
                <img src={limpiezaIcon} alt="#" />
            </div>

            {/* Agrega el botón de "Volver al inicio" */}
            <a href="#top" className="btn btn-dark rounded-circle" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
                ↑
            </a>

            {/* Parte de abajo */}
            <footer className="bg-light text-dark mt-5">
                <div className="container py-4">
                    <div className="row text-center text-md-start">
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Nuestra Empresa</h6>
                            <ul className="list-unstyled">
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Conócenos</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Trabaja con nosotros</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Responsabilidad Social</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Ventas Corporativas</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Atención al Cliente</h6>
                            <ul className="list-unstyled">
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Centro de Ayuda</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Políticas de Cambios</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Términos y Condiciones</a></li>
                                <li><a className="link-offset-2 link-underline link-underline-opacity-0 link-dark" href="#">Políticas de Privacidad</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Compra Segura</h6>
                            <p>100% Garantizada</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h6 className="fw-bold">Atención Telefónica</h6>
                            <p><strong>(01) 625-8000</strong></p>
                            <p>Lunes a Domingo de 8:00 am a 10:00 pm</p>
                        </div>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="bg-dark text-light text-center py-2">
                    © 2026 Supermercados Peruanos S.A. Todos los derechos reservados.
                </div>
            </footer>
        </>
    )
}

export default Supermercado