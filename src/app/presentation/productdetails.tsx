import { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { useParams } from "react-router-dom";
import {
  addtoCart,
  //removefromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../utils/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { ProductType } from "../../../utils/types";
import { useSelector } from "react-redux";
export default function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const dispatch = useDispatch();
  // const cartLength = useSelector(
  //   (state: any) => state.checkout.productQuantity,
  // );
  const cartProducts = useSelector((state: any) => state.checkout.cartProducts);
  const productInCart = cartProducts.find(
    (item: any) => item.product.id === product?.id,
  );
  const productQuantity = productInCart ? productInCart.quantity : 0;
  console.log(productQuantity);
  // console.log(cartProducts);

  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: product } = await supabase
          .from("Products")
          .select("*")
          .eq("id", productId) // productId = the id you want
          .single();
        setProduct(product ?? null);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  // use if expecting one row

  return (
    <div className="w-full h-full m-0">
      <div className="w-full flex flex-col justify-center items-center h-48 m-0">
        <h1 className="text-3xl">Shop</h1>
        <span>
          Home / Shop / {product?.category} / {product?.name}
        </span>
      </div>
      <div>{!product && <p>Loading...</p>}</div>
      <div className="flex flex-col justify-center items-center sm:m-24 m-8">
        {product && (
          <div className="flex sm:flex-row flex-col sm:space-x-10 space-y-8">
            <div className="border border-0.5 border-gray-200 w-72 h-72">
              <img className="w-64 h-64" src={product.image} />
            </div>
            <div className="flex flex-col space-y-3">
              <div className="text-green-400">{product.category}</div>
              <div className="flex flex-row space-x-2">
                <div className="text-2xl">{product.name}</div>
                <div className="text-green-600 bg-green-100 py-0.5 px-2 border rounded-full">
                  {product.availability}
                </div>
              </div>
              <div>${product.price}</div>
              <div className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                quae.
              </div>
              <div className="flex flex-row space-x-3">
                <div className="flex flex-row space-x-2 px-2 py-0.5 border rounded-full">
                  <div
                    onClick={() => {
                      dispatch(decreaseQuantity(product));
                      console.log("removed from cart");
                    }}
                  >
                    -
                  </div>
                  <div>{productQuantity}</div>
                  <div
                    onClick={() => {
                      dispatch(increaseQuantity(product));
                      console.log("added to cart");
                    }}
                  >
                    +
                  </div>
                </div>
                <div
                  onClick={() => {
                    dispatch(addtoCart(product));
                    console.log("added to cart");
                  }}
                  className="bg-green-700 text-white rounded-full pt-1.5 text-xs px-2 py-0.5 text-center"
                >
                  Add to cart
                </div>
                <div
                  onClick={() => {
                    dispatch(addtoCart(product));
                    navigate("/billing-info");
                  }}
                  className="bg-yellow-500 text-black rounded-full pt-1.5 text-xs px-2 py-0.5 text-center"
                >
                  Buy now
                </div>
              </div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
