import styled from 'react-emotion';

export const Row = styled('div')(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: props.width || '100%',
  alignItems: props.align,
  ...props.style,
}));

export const Column = styled('div')(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: props.align || 'flex-start',
  flex: 1,
  ...props.style,
}));

export const Cell = styled('div')(props => ({
  backgroundColor: props.color,
  padding: '40px',
  borderRadius: '20px',
  flex: 1,
  margin: props.margin,
  ...props.style,
}));
