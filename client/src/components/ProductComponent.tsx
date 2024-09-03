import { Rate } from "antd";

interface Props {
  title: string;
  image: string;
  rate: number;
  price: number;
  isDiscount: boolean;
  discountPer: number;
}

const ProductComponent = (props: Props) => {
  const { title, image, rate, price, isDiscount, discountPer } = props;
  return (
    <div className="w-[25vw]">
      <img
        className="h-[22vw] w-full rounded-xl object-cover object-top"
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
          {isDiscount && <h2>${price - (price * discountPer) / 100}</h2>}
          <h2
            className={`${isDiscount ? "text-[rgb(0,0,0,0.4)] line-through" : ""}`}
          >
            ${price}
          </h2>
          {isDiscount && (
            <span className="rounded-xl bg-red-100 p-1 px-3 text-sm text-red-500">
              -20%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
