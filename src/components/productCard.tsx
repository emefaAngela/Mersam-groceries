interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
}

export default function ProductCard({ id, image, title, category, price }: ProductCardProps) {
  return(
    <div
              key={id}
              className="flex flex-col space-y-4 h-64 border border-gray-200 rounded-sm p-4"
            >
              <div className="flex justify-end">
                <img src={image} alt="wishlist" />
              </div>
              <div>{image}</div>
              <div className="flex flex-col space-y-2">
                <div className="text-green-400 text-md">{category}</div>
                <div className="font medium text-lg text-gray-800">
                  {title}
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-lg text-gray-800 font-medium">
                    GHS {price}
                  </div>
                  <div className="flex space-x-1 w-fit bg-green-200 rounded-full px-2 text-center items-center">
                    <div></div>
                    <div className="text-green-500">Add</div>
                  </div>
                </div>
              </div>
            </div>
  )
}