import { Breadcrumb, Divider, message, Rate, Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { LabelColor, LabelSize } from "../components";
import { ButtonComponent } from "../share";
import { useEffect, useState } from "react";
import { AddSquare, MinusSquare } from "iconsax-react";
import axios from "axios";
import { getValue } from "../utils/getValues";

interface Product {
  _id: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  discount: {
    percentage: number;
    isActive: boolean;
    startDate: Date;
    endDate: Date;
  };
  category: string;
  colors: string[];
  sizes: string[];
  images: { url: string }[];
}

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`,
        );
        setProduct(response.data.product);
        setMainImage(response.data.product.images[0].url);
      } catch (error: any) {
        message.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-80 h-[50vh] w-full text-center">
        <Spin size={"large"} />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log(product, mainImage);

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
              title: <Link to={"/"}>Home</Link>,
            },
            {
              title: <Link to={"#"}>{product.category}</Link>,
            },
            {
              title: `${product.title}`,
            },
          ]}
        />
      </div>
      <div className="mb-10 mt-2 flex gap-10">
        <div className="flex w-1/2 gap-4">
          <div className="flex w-1/4 flex-col gap-4">
            <div
              onClick={() => setMainImage(product.images[0].url)}
              className="h-60 cursor-pointer overflow-hidden rounded-2xl hover:ring-2"
            >
              <img src={product.images[0].url} alt="" />
            </div>
            <div
              onClick={() => setMainImage(product.images[1].url)}
              className="h-60 cursor-pointer overflow-hidden rounded-2xl hover:ring-2"
            >
              <img src={product.images[1].url} alt="" />
            </div>
            <div
              onClick={() => setMainImage(product.images[2].url)}
              className="h-60 cursor-pointer overflow-hidden rounded-2xl hover:ring-2"
            >
              <img src={product.images[2].url} alt="" />
            </div>
          </div>
          <div className="w-3/4">
            <div className="h-[752px] cursor-pointer overflow-hidden rounded-2xl hover:ring-2">
              <img src={mainImage} alt="" />
            </div>
          </div>
        </div>
        <div className="my-4 flex-1">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <div className="my-2 flex items-center gap-3">
            <Rate disabled allowHalf value={product.rating} />
            <span className="text-desc">{product.rating}/5</span>
          </div>
          <div className="my-3 flex items-center gap-3 text-3xl font-semibold">
            {product.discount.isActive && (
              <h2>
                $
                {product.price -
                  (product.price * product.discount.percentage) / 100}
              </h2>
            )}
            {product.discount.isActive && (
              <h2 className="text-[rgb(0,0,0,0.4)] line-through">
                ${product.price}
              </h2>
            )}
            {product.discount.isActive && (
              <span className="rounded-xl bg-red-100 p-1 px-3 text-sm text-red-500">
                -{product.discount.percentage}%
              </span>
            )}
          </div>
          <p className="text-desc">{product.description}</p>
          <Divider />
          <div>
            <h3 className="text-lg">Select Colors</h3>
            <div className="my-3 flex gap-3">
              {product.colors.map((color, index) => (
                <LabelColor key={index} color={getValue(color)} />
              ))}
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="text-lg">Choose Size</h3>
            <div className="my-3 flex gap-3">
              {product.sizes.map((size, index) => (
                <LabelSize key={index} text={size} />
              ))}
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
