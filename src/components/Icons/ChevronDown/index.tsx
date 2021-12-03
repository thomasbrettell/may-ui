import defaultTheme from "../../../themes/default";
import { IconProps } from "../types";

const ChevronDown = ({size = 'md'}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={defaultTheme.size.icon[size]}
      height={defaultTheme.size.icon[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 8.2l-7.985 7.986L4 8.17"
      ></path>
    </svg>
  );
};

export default ChevronDown
