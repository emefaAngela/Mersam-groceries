export async function handleCheckout  (email: string, amount: number) {
 const response = await fetch("https://myyzytqvzcmfopbgqvfn.supabase.co/functions/v1/payment-api", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "gelamengor@gmail.com",
    amount: 1,
  }),
});

const data = await response.json();
console.log(data);
window.location.href = data.data.authorization_url;
}