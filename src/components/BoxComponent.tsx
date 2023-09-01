// BoxComponent.tsx
import { FC, CSSProperties } from 'react';
import { Box } from '@mui/material';

interface BoxComponentProps {
  // Background color for the box (default: lightgray)
  backgroundColor?: string;
  // Width of the box (default: 200px)
  width?: string;
  // Height of the box (default: 200px)
  height?: string;
  // Additional inline styles for the box
  style?: CSSProperties;
}

const BoxComponent: FC<BoxComponentProps> = ({
  backgroundColor = 'lightgray',
  width = '200px',
  height = '200px',
  style,
}) => {
  // Combine the default styles with any custom styles provided
  const boxStyle: CSSProperties = {
    backgroundColor,
    width,
    height,
    ...style,
  };

  // Render a Material-UI Box component with the combined styles
  return <Box style={boxStyle} />;
};

export default BoxComponent;