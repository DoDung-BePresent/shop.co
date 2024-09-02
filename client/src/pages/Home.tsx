import Banner from "../assets/banner.png";
import { BrandSlider } from "../components";
import ButtonComponent from "../share/ButtonComponent";

const Home = () => {
  return (
    <div>
      {/* Banner Cover */}
      <div className="relative">
        <img className="w-full object-cover" src={Banner} />

        <div className="absolute top-12 flex w-[60vw] flex-col gap-10 p-20">
          <div className="flex w-3/4 flex-col gap-5">
            <h1 className="text-7xl font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-desc">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <ButtonComponent>Shop Now</ButtonComponent>
          </div>
          <div className="flex items-center gap-5">
            <div className="py-2 pr-5">
              <h2 className="text-5xl font-semibold">200+</h2>
              <p className="mt-1 text-desc">International Brands</p>
            </div>
            <div className="border-x-2 border-[#cccccc] px-10 py-2">
              <h2 className="text-5xl font-semibold">2,000+</h2>
              <p className="mt-1 text-desc">High-Quality Products</p>
            </div>
            <div className="py-2 pl-5">
              <h2 className="text-5xl font-semibold">30,000+</h2>
              <p className="mt-1 text-desc">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Slider */}
      <BrandSlider />
      {/* New Arrivals */}
      <div className="section">
        <h2 className="text-center text-5xl font-extrabold">NEW ARRIVALS</h2>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
