import { Input } from "antd";
import { SearchNormal1 } from "iconsax-react";

const InputComponent = () => {
  return (
    <Input
      className="w-[600px]"
      placeholder="Search for product..."
      size="large"
      style={{
        backgroundColor: "#F0F0F0",
      }}
      prefix={<SearchNormal1 size={22} />}
    />
  );
};

export default InputComponent;
