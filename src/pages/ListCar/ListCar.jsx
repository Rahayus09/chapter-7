import React from "react";
import fiplus from '../../asset/images/fi_plus.png';
import ficar from '../../asset/images/fi_car.png';
import fikey from '../../asset/images/fi_key.png';
import ficlock from '../../asset/images/fi_clock.png';
import fitrash from '../../asset/images/fi_trash-2.png';
import fiedit from '../../asset/images/fi_edit.png';
import { Card, CardContent, Typography, Grid, Container } from '@material-ui/core';
import Navbar from '../../components/Layouts/Navbar';
import './ListCar.css';


function ListCar() {
    return (
        <>
        <Navbar/>
        <body >
           {/* <div className="d-flex" id="wrapper">
           <div className="container-fluid"> */}
       
            <div className="container-list-car" >
                <div className="list-button">
                    <span className="list-car" >List Car</span>
                    <div className="button-right">
                        <button type="button" className="btn btn-primary">
                            <img src={fiplus} alt=""/> Add New Car
                        </button>
                    </div>
                </div>
                <div className="btn-group" aria-label="Basic example" >
                    <button type="button" className="btn btn-outline-primary" >All</button>
                    <button type="button" className="btn btn-outline-primary" >Small</button>
                    <button type="button" className="btn btn-outline-primary" >Medium</button>
                    <button type="button" className="btn btn-outline-primary" >Large</button>
                </div>

                
            
                <Grid container spacing={3} columns={12}>
                    <Grid item xs={4}>
                        <div className="col-sm-4">
                            <Card className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={ficar} alt="img-car"/>
                                    </h5>
                                    <p>Nama/Tipe Mobil</p>
                                    <h6>Rp 430.000 / hari</h6>
                                    <p className="card-text">
                                        <img src={fikey} alt="icon-key"/>Start rent - Finish rent
                                    </p>
                                    <p className="card-text">
                                        <img src={ficlock} alt="icon-clock"/>Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className="btn-group" aria-label="Basic example">
                                        <button type="button" className="btn btn-danger">
                                            <img src={fitrash} alt="icon-trash"/>Delete
                                        </button>
                                        <button type="button" className="btn btn-success">
                                            <img src={fiedit} alt="icon-edit"/>Edit
                                        </button>
                                    </div>
                                </div>   
                            </Card>
                        </div>
                    </Grid>
                
                    <Grid item xs={4}>
                        <div className="col-sm-4">
                            <Card className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={ficar} alt="img-car"/>
                                    </h5>
                                    <p>Nama/Tipe Mobil</p>
                                    <h6>Rp 430.000 / hari</h6>
                                    <p className="card-text">
                                        <img src={fikey} alt="icon-key"/>Start rent - Finish rent
                                    </p>
                                    <p className="card-text">
                                        <img src={ficlock} alt="icon-clock"/>Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className="btn-group" aria-label="Basic example">
                                        <button type="button" className="btn btn-danger">
                                            <img src={fitrash} alt="icon-trash"/>Delete
                                        </button>
                                        <button type="button" className="btn btn-success">
                                            <img src={fiedit} alt="icon-edit"/>Edit
                                        </button>
                                    </div>
                                </div>   
                            </Card>
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <div className="col-sm-4">
                            <Card className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={ficar} alt="img-car"/>
                                    </h5>
                                    <p>Nama/Tipe Mobil</p>
                                    <h6>Rp 430.000 / hari</h6>
                                    <p className="card-text">
                                        <img src={fikey} alt="icon-key"/>Start rent - Finish rent
                                    </p>
                                    <p className="card-text">
                                        <img src={ficlock} alt="icon-clock"/>Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className="btn-group" aria-label="Basic example">
                                        <button type="button" className="btn btn-danger">
                                            <img src={fitrash} alt="icon-trash"/>Delete
                                        </button>
                                        <button type="button" className="btn btn-success">
                                            <img src={fiedit} alt="icon-edit"/>Edit
                                        </button>
                                    </div>
                                </div>   
                            </Card>
                        </div>
                    </Grid>
                   
                    
                      
                </Grid>

                {/* <div class="row">
                    <div class="col-4">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title" >
                                    <img src={ficar} alt="img-car"/>
                                </h5>
                                <p>Nama/Tipe Mobil</p>
                                <h6 > Rp 430.000 / hari</h6>
                                <p class="card-text">
                                    <img src={fikey}  alt="icon-key"/>Start rent - Finish rent
                                </p>
                                <p class="card-text">
                                    <img src={ficlock}  alt="icon-clock" />Updated at 4 Apr 2022, 09.00 
                                </p>
                                <div class="btn-group" aria-label="Basic example" >
                                    <button type="button" class="btn btn-danger" >
                                        <img src={fitrash}  alt="icon-trash"/>Delete
                                    </button>
                                    <button type="button" class="btn btn-success" >
                                        <img src={fiedit} alt="icon-edit"/>Edit
                                    </button>
                                </div>
                            </div>                  
                        </div>
                    </div>

                   
                   
                </div> */}
            </div> 
            {/* </div>
        </div>  */}
        </body>    
        </>
    )
}

export default ListCar;
