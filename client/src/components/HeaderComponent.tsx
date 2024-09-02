import { Bag2, UserSquare } from "iconsax-react";
import { InputComponent } from "../share";
import { Button } from "antd";

const HeaderComponent = () => {
  return (
    <div className="container mx-auto flex items-center justify-between bg-white py-5">
      <h1 className="text-5xl font-semibold">SHOP.CO</h1>
      <ul className="flex items-center gap-10 text-lg">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <InputComponent />
      <div className="flex items-center gap-3">
        <Button size="large" icon={<Bag2 />} />
        <Button size="large" icon={<UserSquare />} />
      </div>
    </div>
  );
};

export default HeaderComponent;
