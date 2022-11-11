import StarBorderIcon from '@mui/icons-material/StarBorder';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavoriteTable } from './FavoriteTable';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return <>
    <CustomDialog>
      <FavoriteTable />
    </CustomDialog>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          I'm an example of good practices
        </Typography>

        <IconButton size="large" edge="end" color='inherit' aria-label='favorites' onClick={handleClick}>
          <StarBorderIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>
};

export default Navbar;
