import React from "react";
import { iBtnProp } from ".";

const PrimaryButton: React.FC<iBtnProp> = ({
  className,
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn primary-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
