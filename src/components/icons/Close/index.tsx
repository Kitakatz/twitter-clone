import React from "react";
import { CloseProps } from "./interface";

const Close: React.FC<CloseProps> = (props): React.ReactElement => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>

  );
};

export default Close;