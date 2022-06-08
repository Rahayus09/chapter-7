import React from "react";
import { Container, Card, Form, FormLabel } from "react-bootstrap";
import Navbar from "../../components/Layouts/Navbar";
import { FormText } from "reactstrap";
import { Grid, Input } from "@material-ui/core";
import "./AddCar.css";


function AddCar () {
    return (
        <section>
            <Navbar/>
           
                <div className="row">
                    <div className="col-12">
                        <div className="sub-tree d-flex mt-3 mb-3">
                            <a href="#">
                            <p className="fw-bold">Cars</p>
                            </a>
                            <i className="fa fa-solid fa-chevron-right mx-2"></i>
                            <a href="#">
                            <p className="fw-bold">List Car</p>
                            </a>
                            <i className="fa fa-solid fa-chevron-right mx-2"></i>
                            <a href="#">
                            <p>Add New Car</p>
                            </a>
                        </div>
                    </div>
                </div>

                    <h2>Add New Car</h2>
                <div className="form-body">
                        {/* <form> */}
                        <Grid container-fluid columns={12}>
                            <Grid item xs={3}>
                            
                                    <label for="inputName" className="col-form-label">Nama</label>
                                    {/* <label for="wajib" style="color: red">*</label> */}
                             
                            </Grid>
                            <Grid item xs={9}>
                                    <input type="text" id="inputNama6" className="form-control" placeholder="Nama" />
                                    <small id="namaHelp" className="form-text text-muted"></small>
                           
                            </Grid> 
                        </Grid>

                        <Grid>
                            <Grid item xs={3}>
                       
                                <label for="inputPassword6" className="col-form-label">Harga</label>
                                {/* <label for="wajib" style="color: red">*</label> */}
                           
                            </Grid>
                            <Grid item xs={9}>
                      
                                    <input type="text" id="inputHarga6" className="form-control" placeholder="Harga" />
                                    <small id="hargaHelp" className="form-text text-muted"></small>
                             
                            </Grid>
                        </Grid>
                            
                        <Grid container-fluid>
                        <Grid item xs={3}>
                                <label for="inputFoto6" className="col-form-label">Foto</label>
                            </Grid>
                            <Grid item xs={9}>
                                <div className="input-group">
                                    <input className="form-control" type="file"  />
                                    <label for="formFile" id="file-input" className="form-control icon text-secondary">No file selected</label>
                                    <span className="input-group-text"><img src="./images/fi_upload.png" /></span>
                                </div>
                            </Grid>
                        </Grid>  
                        
                            <Grid item xs={3}>
                                <label for="inputFinishRent6" className="col-form-label">Start Rent</label>
                            </Grid>
                            <Grid item xs={9}>
                                <span> - </span>
                                <span className="error-notif"></span>
                            </Grid>  
                           
                            <Grid item xs={3}>
                                <label for="inputFinishRent6" className="col-form-label">Finish Rent</label>
                            </Grid>
                            <Grid item xs={9}>
                                <span> - </span>
                                <span className="error-notif"></span>
                            </Grid>
                            
                            <Grid item xs={3}>
                                <label for="inputFinishRent6" className="col-form-label">Created Rent</label>
                            </Grid>
                            <Grid item xs={9}>
                                <span> - </span>
                                <span className="error-notif"></span>
                            </Grid>
                            <Grid item xs={3}>
                                <label for="inputFinishRent6" className="col-form-label">Updated Rent</label>
                            </Grid>
                            <Grid item xs={9}>
                                <span> - </span>
                                <span className="error-notif"></span>
                            </Grid>
                            
                  
                </div>
            <div className="button">
                    <button type="button" className="btn-custom">Cancel</button>
                    <button type="button" className="btn-custom-save">Save</button>
            </div>
             
              
         
      </section>   
    )
}

export default AddCar;