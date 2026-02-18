import { useEffect, useState } from "react";
import supabase from "../../../utils/supabase";
import { useParams } from "react-router-dom";
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  // add other fields as needed
};
export default function ProductDetails() {
  const [product, setProduct] = useState<Product[]>([]);

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
        setProduct(product ?? []);
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
      <div className="flex flex-col justify-center items-center m-24">
        {product && (
          <div className="flex flex-row space-x-10">
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
                  <div>-</div>
                  <div>0</div>
                  <div>+</div>
                </div>
                <div className="bg-green-700 text-white rounded-full pt-1.5 text-xs px-2 py-0.5 text-center">
                  Add to cart
                </div>
                <div className="bg-yellow-500 text-black rounded-full pt-1.5 text-xs px-2 py-0.5 text-center">
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
