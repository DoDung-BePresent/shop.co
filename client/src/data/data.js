import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Product1 from "../assets/product-1.webp";
import Product2 from "../assets/product-2.webp";
import Product3 from "../assets/product-3.webp";
import Product4 from "../assets/product-4.webp";

const products = [
  {
    id: 1,
    title: "Vertical Striped Shirt",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem quae error ipsam, ex corrupti fuga laudantium minima magni expedita cumque autem quam eveniet neque, eos provident porro molestias atque!",
    category: "Shirt",
    rating: 5,
    stock: 40,
    brand: "",
    colors: ["brown", "green", "purple"],
    sizes: ["S", "M", "L", "XL"],
    price: 212,
    discountPercentage: 20,
    isDiscount: true,
    images: [Image1],
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
  },
  {
    id: 2,
    title: "Polo with Contrast Trims",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem quae error ipsam, ex corrupti fuga laudantium minima magni expedita cumque autem quam eveniet neque, eos provident porro molestias atque!",
    category: "Shirt",
    rating: 4,
    stock: 30,
    brand: "",
    colors: ["brown", "green", "purple"],
    sizes: ["S", "M", "L", "XL"],
    price: 212,
    discountPercentage: 20,
    isDiscount: true,
    images: [Image2],
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
  },
  {
    id: 3,
    title: "T-shirt with Tape Details",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem quae error ipsam, ex corrupti fuga laudantium minima magni expedita cumque autem quam eveniet neque, eos provident porro molestias atque!",
    category: "Shirt",
    rating: 4.5,
    stock: 10,
    brand: "",
    colors: ["brown", "green", "purple"],
    sizes: ["S", "M", "L", "XL"],
    price: 120,
    discountPercentage: 20,
    isDiscount: false,
    images: [Image3],
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
  },
  {
    id: 4,
    title: "Vertical Striped Shirt",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem quae error ipsam, ex corrupti fuga laudantium minima magni expedita cumque autem quam eveniet neque, eos provident porro molestias atque!",
    category: "Shirt",
    rating: 5,
    stock: 40,
    brand: "",
    colors: ["brown", "green", "purple"],
    sizes: ["S", "M", "L", "XL"],
    price: 212,
    discountPercentage: 20,
    isDiscount: true,
    images: [Product1, Product2, Product3, Product4],
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
  },
];

export { products };
