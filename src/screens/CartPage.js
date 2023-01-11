import {useSelector,useDispatch} from "react-redux"
import Checkout from "../components/Checkout"
import { addToCart, deleteFromCart } from "../redux/actions/cartActions";
import Footer from "../components/Footer";
import "../components/Footer.css";
import Navbar from "../components/Navbar";

const CartPage = () => {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems

   var subtotal = cartItems.reduce((x , item)=>x+item.price , 0)

    const dispatch = useDispatch()

    const handleIncrement = (item) => {
        dispatch(addToCart(item,item.quantity+1,item.varient))
    }

    const handleDecrement = (item) => {
        dispatch(addToCart(item,item.quantity-1,item.varient))
    }

    const handleDeleteCartItem = (item) => {
        dispatch(deleteFromCart(item))
    }

    return (
        <>
        <Navbar/>
        <div>
           <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{fontSize:"40px"}}>My Cart</h2>
                    
                    {cartItems.map(item=>{
                        return(
                            <div className="flex-container">
                            <div className="text-left m-1 w-100">
                                <h1>{item.name}[{item.varient}]</h1>
                                <h1>price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{display:"inline"}}>Quantity : </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>handleIncrement(item)}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>handleDecrement(item)}></i>
                                <hr/>
                            </div>
                            <div className="m-1 w-100">
                                <img src={item.image} style={{height:"80px",width:"80px"}}/>
                            </div>
                            <div className="m-1 w-100">
                            <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>handleDeleteCartItem(item)}></i>
                            </div>
                            </div>
                        ) 
                    })}

                    

                </div>
                <div className="col-md-4 text-right">
                    <h2 style={{fontSize:"45px"}}>SubTotal : {subtotal} /-</h2>
                    <Checkout subtotal={subtotal}/>
                </div>
           </div>
           <Footer/>
        </div>
        </>
    )
}

export default CartPage