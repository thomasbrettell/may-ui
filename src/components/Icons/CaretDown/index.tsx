import { IconProps } from '../types';
import defaultTheme from "../../../themes/default";

const CaretDown = ({ size = 'md' }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={defaultTheme.size.icon[size]}
      height={defaultTheme.size.icon[size]}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path fill="#000" d="M16 10H8l4 4 4-4z"></path>
    </svg>
  );
};

export default CaretDown;
