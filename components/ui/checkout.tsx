import {loadStripe} from "@stripe/stripe-js";
export async function Checkout({lineItems}) {
    let stripePromise:any = null;
    let getStripe = async ()=>{
        if(!stripePromise){
            stripePromise = loadStripe("pk_test_51LvXcfDcOVc7RVNdFD1rhpFGWh90Y8Y8oXfsns9k9WcpQw0aW1TDMIipU8QjWUjBFb1ZEkbRV7Hp5yqxpYN7OazP00ThD36VmR");
        }
        return stripePromise;
    }
        const stripe = await getStripe();
        await stripe.redirectToCheckout({
            mode: "payment",
            lineItems,
            successUrl:`${window.location.origin}/ORDERPLACED/?success=true`,
            cancelUrl: `${window.location.origin}/PAYMENTFAILED/?cancelled=true`,
        });
}