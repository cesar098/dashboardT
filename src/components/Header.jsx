import { Box, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';


const CardWrapper = styled('div')(({ theme }) => ({
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.secondary,
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));
const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <CardWrapper>
      <Typography
        variant='h2'
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{m: "0 0 5px 0"}}
      >
        {title}
      </Typography>
      <Typography variant='h5' color= {colors.greenAccent[200]}>
        {subtitle}
      </Typography>
    </CardWrapper>
  );
};

export default Header;