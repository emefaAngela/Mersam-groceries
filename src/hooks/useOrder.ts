import supabase from "../../utils/supabase";
import {type PaymentDetailsType,type CartItem} from "../../utils/types";

export async function createOrder  (customerId: number, amount_paid: number,order_details:CartItem[],payment_details:PaymentDetailsType,created_at:Date) {
    try{
      const {data, error} = await supabase.from("Orders").insert({
          customer_id:1,
          amount_paid:amount_paid,
          payment_details:payment_details,
          order_details:order_details,
          created_at:created_at
      });
      if(error){
        console.error("Error creating order:", error);
        return null;
      }
      return data;
    }
  catch(error){
    console.error("Error creating order:", error);
    return null;
  }


}