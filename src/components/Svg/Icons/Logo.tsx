import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="25px"
      height="25px"
      viewBox="0 0 75.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
          d="M304 589 c-10 -12 -59 -51 -107 -86 -138 -102 -185 -182 -157 -268
 30 -92 156 -103 217 -19 32 43 46 23 40 -55 -5 -66 -16 -84 -71 -116 -12 -7
 16 -10 99 -10 107 0 114 1 94 15 -60 40 -63 45 -67 119 -3 40 0 71 5 71 5 0
 20 -12 34 -26 89 -96 229 -54 229 68 0 59 -52 131 -142 199 -46 34 -99 77
 -119 96 l-35 34 -20 -22z"
        />
      </g>
    </svg>
  );
};

export default Icon;
