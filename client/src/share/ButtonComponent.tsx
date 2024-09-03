import { Button, ConfigProvider } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant: string;
  styles?: CSSProperties;
  onClick?: () => void;
}

const ButtonComponent = (props: Props) => {
  const { children, onClick, variant, styles } = props;
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: variant === "dark" ? "#000000" : "#fffff",
            defaultColor: variant === "dark" ? "white" : "rgba(0, 0, 0, 0.88)",
            defaultHoverBg: variant === "dark" ? "#000000" : "#fffff",
            defaultHoverColor: variant === "dark" ? "white" : "#4096ff",
            defaultHoverBorderColor: variant === "dark" ? "#8b8b8b" : "#4096ff",
            defaultActiveBg: variant === "dark" ? "rgb(0,0,0,0.6)" : "#fffff",
            defaultActiveColor: variant === "dark" ? "white" : "dark",
          },
        },
      }}
    >
      <Button
        style={{
          maxWidth: "fit-content",
          ...styles,
        }}
        size="large"
        ghost={false}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default ButtonComponent;
