import { Rate } from "antd";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  image: string;
  rate: number;
  price: number;
  isActive: boolean;
  discountPer: number;
}

const ProductComponent = (props: Props) => {
  const { id, title, image, rate, price, isActive, discountPer } = props;
  return (
    <Link className="w-[25vw]" to={`/product/${id}`}>
      <div className="rounded-xl">
        <img
          className="h-[22vw] w-full rounded-xl object-cover object-top duration-150 ease-in hover:scale-105"
          src={image}
          alt=""
        />
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center gap-3">
            <Rate
              style={{
                fontSize: 18,
              }}
              value={rate}
              allowHalf
            />
            <span>{rate}/5</span>
          </div>
          <div className="flex items-center gap-3 text-2xl font-semibold">
            {isActive && <h2>${price - (price * discountPer) / 100}</h2>}
            <h2
              className={`${isActive ? "text-[rgb(0,0,0,0.4)] line-through" : ""}`}
            >
              ${price}
            </h2>
            {isActive && (
              <span className="rounded-xl bg-red-100 p-1 px-3 text-sm text-red-500">
                -20%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductComponent;
