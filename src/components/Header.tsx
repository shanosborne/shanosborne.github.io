import React from 'react';
import type { ReactElement } from "react";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

interface IPageInfo {
  name: string;
  link: string;
}

const pages: IPageInfo[] = [
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "More Information", link: "#links" }
];

const Header = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton component="a" href="#">
            <HomeIcon fontSize="large" color="info" />
          </IconButton>
          <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page: IPageInfo) => (
              <Button
                key={page.name}
                component="a"
                href={page.link}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page: IPageInfo) => (
                <MenuItem
                  key={page.name}
                  component="a"
                  href={page.link}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;