// ButtonComponent.tsx
import React, { FC, ReactNode, MouseEvent } from 'react';
import { Button } from '@mui/material';

interface ButtonComponentProps {
  // Color variant for the button (default: primary)
  color?: 'primary' | 'secondary';
  // Click event handler for the button
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  // Content of the button
  children: ReactNode;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ color = 'primary', onClick, children }) => {
  // Render a Material-UI Button component with customizable color and click event
  return (
    <Button color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
