interface Props {
  text: string;
}

const LabelSize = (props: Props) => {
  const { text } = props;
  return (
    <div className="w-16 rounded-xl bg-gray p-2 px-4 text-center duration-200 ease-in hover:bg-desc hover:text-white">
      {text}
    </div>
  );
};

export default LabelSize;
