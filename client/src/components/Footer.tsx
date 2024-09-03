import { Dribbble, Facebook, Instagram } from "iconsax-react";
import { ButtonComponent, InputComponent, LabelComponent } from "../share";
import { Divider } from "antd";

const Footer = () => {
  return (
    <div className="relative">
      {/* Contact */}
      <div className="container mx-auto flex items-center gap-[450px] rounded-2xl bg-black p-10 px-16">
        <h1 className="flex-1 text-5xl font-bold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex w-1/5 flex-col gap-3">
          <InputComponent isSearch={false} />
          <ButtonComponent
            styles={{
              backgroundColor: "#ffffff",
              fontWeight: 500,
              maxWidth: "100%",
              borderRadius: 100,
            }}
            variant="light"
          >
            Subscribe to Newsletter
          </ButtonComponent>
        </div>
      </div>
      <div className="absolute top-20 -z-10 w-full bg-gray pb-10 pt-40">
        <div className="container mx-auto flex justify-between">
          <div className="flex w-[20vw] flex-col gap-5">
            <h1 className="text-4xl font-bold">SHOP.CO</h1>
            <p className="text-desc">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-4">
              <LabelComponent>
                <Dribbble size={20} />
              </LabelComponent>
              <LabelComponent>
                <Facebook size={20} />
              </LabelComponent>
              <LabelComponent>
                <Instagram size={20} />
              </LabelComponent>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-desc">
            <h3 className="text-xl font-semibold text-black">COMPANY</h3>
            <p className="duration-150 ease-in hover:text-black">About</p>
            <p className="duration-150 ease-in hover:text-black">Features</p>
            <p className="duration-150 ease-in hover:text-black">Works</p>
            <p className="duration-150 ease-in hover:text-black">Career</p>
          </div>
          <div className="flex flex-col gap-4 text-desc">
            <h3 className="text-xl font-semibold text-black">HELP</h3>
            <p className="duration-150 ease-in hover:text-black">
              Customer Support
            </p>
            <p className="duration-150 ease-in hover:text-black">
              Delivery Details
            </p>
            <p className="duration-150 ease-in hover:text-black">
              Terms & Conditions
            </p>
            <p className="duration-150 ease-in hover:text-black">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col gap-4 text-desc">
            <h3 className="text-xl font-semibold text-black">FAQ</h3>
            <p className="duration-150 ease-in hover:text-black">Account</p>
            <p className="duration-150 ease-in hover:text-black">
              Manage Deliveries
            </p>
            <p className="duration-150 ease-in hover:text-black">Orders</p>
            <p className="duration-150 ease-in hover:text-black">Payments</p>
          </div>
          <div className="flex flex-col gap-4 text-desc">
            <h3 className="text-xl font-semibold text-black">RESOURCES</h3>
            <p className="duration-150 ease-in hover:text-black">Free eBooks</p>
            <p className="duration-150 ease-in hover:text-black">
              Development Tutorial
            </p>
            <p className="duration-150 ease-in hover:text-black">
              How to - Blog
            </p>
            <p className="duration-150 ease-in hover:text-black">
              Youtube Playlist
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <Divider />
        </div>
        <div className="container mx-auto text-desc">
          <h3>Shop.co © 2000-2021, All rights reserved</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
