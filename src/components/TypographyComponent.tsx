// TypographyComponent.tsx
import  { FC, ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface TypographyComponentProps extends TypographyProps {
  // Content to be displayed within the Typography component
  children: ReactNode;
}

const TypographyComponent: FC<TypographyComponentProps> = ({ children, ...typographyProps }) => {
  // Render a Material-UI Typography component with customizable props
  return (
    <Typography {...typographyProps}>{children}</Typography>
  );
};

export default TypographyComponent;