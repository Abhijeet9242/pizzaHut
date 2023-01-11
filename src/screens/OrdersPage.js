import {useDispatch,useSelector} from "react-redux";
import {useState,useEffect} from "react"
import { getUserOrder } from "../redux/actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import "../components/Footer.css";
import Navbar from "../components/Navbar";

const OrdersPage = () => {

    const dispatch = useDispatch()
    const orderstate = useSelector(state=>state.getUserOrdersReducer)
    const {orders,error,loading} = orderstate

    useEffect(()=>{
        dispatch(getUserOrder())
    },[])

    return (
        <>
        <Navbar/>
        <div>
            <p style={{fontSize:"35px"}}>My Orders</p>
            <hr/>
            <div className="row justify-content-center" >
                {loading && (<Loading/>)}
                {error && (<Error errormsg="Something went wrong"/>)}

               {
                orders && orders.map((order)=>{
                    return (
                        <div className="col-md-8 m-2 p-1" style={{backgroundColor:"red",color:"white"}}>
                            
                            <div className="flex-container">
                                <div className="text-left w-100 m-1 p-1">
                                    <h2 style={{fontSize:"25px"}}>Items</h2>
                                    <hr/>
                                    {order.orderItems.map((item)=>{
                                        return (
                                            <div>
                                                <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>

                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="text-left w-100 m-1 p-1">
                                <h2 style={{fontSize:"25px"}}>Address</h2>
                                <hr/>
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                                <p>Pincode: {order.shippingAddress.pincode}</p>
                                </div>

                                <div className="text-left w-100 m-1 p-1">
                                <h2 style={{fontSize:"25px"}}>Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
               }

            </div>
            <Footer/>
        </div>
        </>
    )
}

export default OrdersPage