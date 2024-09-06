import { TickCircle } from "iconsax-react";

interface Props {
  color: string;
  onClick?: () => void;
}

const LabelColor = (props: Props) => {
  const { color, onClick } = props;
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="label-color relative h-10 w-10 rounded-full"
    >
      <div className="absolute hidden">
        <TickCircle color="white" size={40} />
      </div>
    </div>
  );
};

export default LabelColor;
