import { Box, styled } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const PageContainer: FC<PropsWithChildren> = (props) => {
  return <StyledBox>{props.children}</StyledBox>;
};

export default PageContainer;
