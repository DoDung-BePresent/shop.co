import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LabelComponent = (props: Props) => {
  const { children } = props;
  return (
    <span className="rounded-full border-2 border-[rgb(0,0,0,0.2)] bg-white p-2 duration-200 ease-in hover:bg-black hover:text-white">
      {children}
    </span>
  );
};

export default LabelComponent;
