import supabase from "../../utils/supabase";
import { type Order } from "../../utils/types";

export async function handleCheckout(email: string, amount: number) {

  
  const response = await fetch(
    "https://myyzytqvzcmfopbgqvfn.supabase.co/functions/v1/payment-api",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        amount: 1,
      }),
    },
  );

  const data = await response.json();
  console.log(data);
  if (data?.data?.authorization_url) {
    window.location.href = data.data.authorization_url;
  } else {
    console.error("Payment initialization failed:", data);
  }
}

export async function verifyPayment(reference: string) {
  const res = await fetch(
    "https://myyzytqvzcmfopbgqvfn.supabase.co/functions/v1/verify-paystack-payment",
    {
      method: "POST",
      body: JSON.stringify({ reference }),
    },
  );

  const data = await res.json();
  return data;
  console.log(data);
}
