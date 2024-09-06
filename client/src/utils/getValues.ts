interface IValueMap {
  [key: string]: string;
}

const valueMap: IValueMap = {
  brown: "#aa7c47",
  green: "rgb(22 101 52)",
  purple: "rgb(134 25 143)",
  gray: "rgb(39 39 42)",
  pink: "#e0b0b7",
};

export const getValue = (value: string) => {
  return valueMap[value];
};
