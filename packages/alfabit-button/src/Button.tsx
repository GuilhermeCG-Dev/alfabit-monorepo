import React from "react";
import { StyledButton } from "./Button.styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant,
  size,
  label,
  icon,
  iconPosition,
  disabled,
  onClick,
}: ButtonProps) => {
  return <StyledButton 
    label={label}
    variant={variant}
    size={size}
    icon={icon}
    iconPosition={iconPosition}
    disabled={disabled}
    onClick={onClick}
  />;
}