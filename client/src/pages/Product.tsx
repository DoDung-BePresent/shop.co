import { Breadcrumb, Divider, Rate } from "antd";
import { Link, useParams } from "react-router-dom";

import Image from "../assets/product-14.webp";
import { LabelColor, LabelSize } from "../components";
import { ButtonComponent } from "../share";
import { useEffect, useState } from "react";
import { AddSquare, MinusSquare } from "iconsax-react";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto">
      {/* Breadcrumb */}
      <div>
        <Divider
          style={{
            margin: "5px 0px",
          }}
        />
        <Breadcrumb
          style={{
            padding: "20px 0px",
          }}
          items={[
            {
              title: "Home",
            },
            {
              title: <Link to={"#"}>Men</Link>,
            },
            {
              title: "Demo",
            },
          ]}
        />
      </div>
      <div className="mb-10 mt-2 flex gap-10">
        <div className="flex w-1/2 gap-4">
          <div className="flex w-1/4 flex-col gap-4">
            <div className="h-60 overflow-hidden rounded-2xl hover:ring-2">
              <img src={Image} alt="" />
            </div>
            <div className="h-60 overflow-hidden rounded-2xl hover:ring-2">
              <img src={Image} alt="" />
            </div>
            <div className="h-60 overflow-hidden rounded-2xl hover:ring-2">
              <img src={Image} alt="" />
            </div>
          </div>
          <div className="w-3/4">
            <div className="h-[752px] overflow-hidden rounded-2xl hover:ring-2">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
        <div className="my-4 flex-1">
          <h1 className="text-5xl font-bold">One Life Graphic T-shirt</h1>
          <div className="my-2 flex items-center gap-3">
            <Rate allowHalf value={4.5} />
            <span className="text-desc">4.5/5</span>
          </div>
          <div className="my-3 flex items-center gap-3 text-3xl font-semibold">
            <h2>$220</h2>
            <h2 className="text-[rgb(0,0,0,0.4)] line-through">$162</h2>
            <span className="rounded-xl bg-red-100 p-1 px-3 text-sm text-red-500">
              -20%
            </span>
          </div>
          <p className="text-desc">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <Divider />
          <div>
            <h3 className="text-lg">Select Colors</h3>
            <div className="my-3 flex gap-3">
              <LabelColor color="#000000" />
              <LabelColor color="#ff0000" />
              <LabelColor color="#ff0d" />
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="text-lg">Choose Size</h3>
            <div className="my-3 flex gap-3">
              <LabelSize text="Small" />
              <LabelSize text="Medium" />
              <LabelSize text="Large" />
              <LabelSize text="X-Large" />
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <div className="flex w-32 justify-between rounded-xl bg-gray p-2 px-4">
              <MinusSquare
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity - 1);
                  } else {
                    setQuantity(0);
                  }
                }}
                className="cursor-pointer duration-100 ease-in hover:text-desc"
              />
              <span className="w-5 text-center">{quantity}</span>
              <AddSquare
                onClick={() => setQuantity(quantity + 1)}
                className="cursor-pointerduration-100 ease-in hover:text-desc"
              />
            </div>
            <ButtonComponent
              styles={{
                maxWidth: "initial",
                width: "80%",
              }}
              variant="dark"
            >
              Add to Cart
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
