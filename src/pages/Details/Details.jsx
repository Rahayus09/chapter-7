import Header from '../../components/Header/Header'
import Searching from '../../components/Searching/Searching';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailCard from '../../components/DetailCard/DetailCard';
import Navbar from '../../components/Layouts/Navbar';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// const styles = {
//     card: {
//         display: 'flex',
//         flexdirection: 'column',
//         alignitems: 'flex-start',
//         padding: '24px',
//         position: 'static',
//         width: '333px',
//         height: '586px',
//         left: '0px',
//         top: '0px',

//     },
//     form: {
//         py: '-5',
//     },

//     button: {
//         display: 'flex',
//         flexdirection: 'row',
//         justifycontent: 'center',
//         alignitems: 'center',
//         padding: '8px 12px',
//     }
// }

function Details() {
    // const [listData, setListData]=useState([])
    // const getData= async ()=> {
    //     try {
    //        const resp=await axios.get("https://rent-cars-appc.herokuapp.com/customer/car")
    //        setListData(resp.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const dispatch = useDispatch();
    const { isLoading, data: details } = useSelector(
        (state) => state.details
    );

    useEffect(()=> {
        dispatch(Details());
    }, [dispatch])

    return (
        <>
        <Navbar/>
            <Container>
                <Header />
                <div className="container style= py-5">
                <Searching />
                    <div className="row">
                        {/* {listData?.map(item =>{
                            return (
                                <>
                                <div className="col-6" key={item.id}> 
                                    <DetailCard />
                                </div>
                                </>
                            )
                        })}                            */}
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            details.map((details) => {
                                return (
                                    <div className="col-6" key={details.id}> 
                                    <DetailCard />
                                </div>
                                )
                            })
                        )}
                    </div>
                    <div styles={{}}className="btn-group" aria-label="Basic example">
                        <button type="button" className="btn btn-success">
                            <p>Lanjutkan Pembayaran</p>
                        </button>                            
                    </div>
                </div>
                
                <Footer />
            </Container>
            </>
    )
}
export default Details;