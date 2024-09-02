interface Props {
  text: string;
  onClick?: () => void;
}

const TopBar = (props: Props) => {
  const { text, onClick } = props;
  return <div className="text-center p-3 bg-black text-white">{text}</div>;
};

export default TopBar;
