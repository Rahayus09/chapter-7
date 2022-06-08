import React from "react";
import MenuIcon from '../../asset/icon/Menu_Icon.svg';
import Rectangular from '../../asset/icon/Rectangular_Icon.svg';
import UserPic from '../../asset/images/User_Picture.jpg';
import HomeIcon from '../../asset/icon/Home_Icon.svg';
import TruckIcon from '../../asset/icon/Truck_Icon.svg'
import { Container } from "@material-ui/core";
import Rectangle from '../../asset/icon/Rectangle_Icon.svg';
import  './Navbar.css';

function Navbar() {
    return (
   
        <div className="container-fluid p-0">

        {/* <!-- NAVBAR SECTION BEGIN --> */}
        <section className="navbar-section" >
            <nav className="navbar navbar-expand-lg border-bottom ms-5" >
                <div className="row container-fluid">
                    <div className="sidebar-toggler ps-5">
                        <a href="#"><img className="ms-5 me-5 collapseSidebar"  src={Rectangular}/></a>
                        <button className="btn ms-5" id="toggleSidebar">
                            <img src={MenuIcon}/>
                        </button>
                    </div>
                    {/* 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><img src={MenuIcon} alt=""/>
                    </button> */}
                    <div className="row-collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <form className="d-flex ms-5">
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-primary border-3 me-3 fw-bold"
                                        type="submit"> Search
                                    </button>
                                </form>
                            </li>

                            <li className="nav-item">
                                 <div className="dropdown">
                                    <a href="#"
                                         className="d-flex flex-row justify-content-center align-items-center link-dark text-decoration-none dropdown-toggle me-2"
                                        id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={UserPic} width="32" height="32" className="rounded-circle me-2" />
                                        <p className="my-0 me-2"> Unis Badri</p>
                                       
                                    </a>
                                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser">
                                        <li><a className="dropdown-item" href="#">Log Out</a></li>
                                    </ul>
                                </div> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        {/* <!-- NAVBAR SECTION END -->

        <!-- SIDEBAR SECTION BEGIN --> */}
        <section className="sidebar-section">
            {/* <!-- Sidebar - Main Menu --> */}
            <div className="main-menu"  >
                <a href="#">
                    <div className="box text-center d-flex justify-content-center align-items-center" >
                        <img className="side-icon" src={Rectangle}/>
                    </div>
                </a>
                <a href="#" >
                    <div className="box text-center py-2" >
                        <img className="side-icon" src={HomeIcon}/>
                        <div>Dashboard</div>
                    </div>
                </a>
                <a href="#" >
                    <div className="box text-center py-2" >
                        <img className="side-icon" src={TruckIcon} />
                        <div>Cars</div>
                    </div>
                </a>
            </div>

            <div className="collapseSidebar" >
                {/* <!-- Sidebar - Menu List --> */}
                <div className="menu-list pt-3" >
                    <h4 className="text-secondary px-3 py-2">CARS</h4>
                    <a href="#" >
                        <div className="list-menu">
                            <p className="m-0">Dashboard</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="list-menu">
                            <p className="m-0">Cars</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        {/* <!-- SIDEBAR SECTION END --> */}



        {/* <!-- CONTENT SECTION BEGIN -->
        <!-- BAGIAN ISI CONTENT DI MULAI DARI SINI --> */}
        {/* <section className="content-section ps-5 pe-4">
            <div className="row">
                <div className="col-lg-0" id="show-col-lg-0">
                    <div className="adding-space" ="width: 300px;">
                    </div>
                </div>
                <div className="col-lg-12" id="show-col-lg-12">
                    {/* <!-- -------------------------- -->
                    <!-- COPY DISINI ISI CONTENTNYA -->
                    <!-- -------------------------- --> 
                </div>
            </div>

        </section> */}
        {/* <!-- BAGIAN ISI CONTENT BERAKHIR Di SINI -->
        <!-- CONTENT SECTION END --> */}
    </div>
     
     )
    }

export default Navbar;