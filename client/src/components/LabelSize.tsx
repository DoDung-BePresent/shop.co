interface Props {
  text: string;
}

const LabelSize = (props: Props) => {
  const { text } = props;
  return (
    <div className="rounded-xl bg-gray p-2 px-4 hover:bg-desc hover:text-white ease-in duration-200">
      {text}
    </div>
  );
};

export default LabelSize;
