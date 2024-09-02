import { Button, ConfigProvider } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const ButtonComponent = (props: Props) => {
  const { children, onClick } = props;
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "#000000",
            defaultColor: "#ffffff",
            defaultHoverBg: "rgb(0,0,0,0.7)",
            defaultHoverColor: "#ffffff",
            defaultActiveBg: "rgb(0,0,0,0.8)",
          },
        },
      }}
    >
      <Button
        style={{
          maxWidth: "fit-content",
        }}
        size="large"
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default ButtonComponent;
