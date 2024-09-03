import { Input } from "antd";
import { MessageText, SearchNormal1 } from "iconsax-react";

interface Props {
  isSearch: boolean;
}

const InputComponent = (props: Props) => {
  const { isSearch } = props;
  return (
    <Input
      className={isSearch ? `w-[600px]` : ""}
      placeholder={
        isSearch ? "Search for product..." : "Enter your email address"
      }
      size="large"
      style={{
        backgroundColor: isSearch ? "#F0F0F0" : "#ffffff",
      }}
      prefix={
        isSearch ? <SearchNormal1 size={22} /> : <MessageText size={22} />
      }
    />
  );
};

export default InputComponent;
