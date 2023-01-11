import StripeCheckout from "react-stripe-checkout";
import {useDispatch,useSelector} from "react-redux"
import { placeOrder } from "../redux/actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

const Checkout = ({subtotal}) => {

    const orderstate = useSelector((state)=>state.placeOrderReducer)
    const {loading,error,success} = orderstate
    const dispatch  = useDispatch()

  
    function tokenHandler(token){
        dispatch(placeOrder(token,subtotal))
    }

    return(
        <div>

            {loading && (<Loading/>)}
            {error && (<Error errormsg="Something went wrong"/>)}
            {success && (<Success success="Your Order Placed Successfully"/>)}

           <StripeCheckout
                amount={subtotal*100}
                shippingAddress
                token={tokenHandler}
                currency="INR"
                stripeKey="pk_test_51MOF6rSBqPHKeC61E2YL0kVkNF5aKJgsIBYFMD6i5AZBordE04WnGRvHUKZfw5Qk2IEHygWn6josubDDONzqIOui00MHcyuRTl"
           >

                
                <button className="btn">Pay Now</button>

           </StripeCheckout>
        </div>
    )
}

export default Checkout