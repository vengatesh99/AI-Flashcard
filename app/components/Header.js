"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  ButtonBase,
  Menu,
  MenuItem
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {useRouter} from "next/navigation";
import { useAuth, useClerk } from '@clerk/nextjs'
import { useState } from "react";

const settings = ['Logout'];

export default function Header() {

    const router = useRouter();
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { signOut } = useClerk();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    }
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
    const handleSetting = () => {
        console.log("Logout");
    }
    
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Stack direction={"row"} justifyContent="space-between" flexGrow={1}>
          <ButtonBase onClick = {()=>{router.push("/")}}>
              <Typography variant="h5" color="initial">
                Braindeck
              </Typography>
          </ButtonBase>
          <Stack direction={"row"}>
            { userId?(<><IconButton aria-controls="menu-appbar" color="inherit" onClick={handleOpenUserMenu}>
            <AccountCircle/>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <ButtonBase onClick = {() => signOut({ redirectUrl: '/' })}>
                      <Typography textAlign="center">{setting}</Typography>
                  </ButtonBase>
                </MenuItem>
              ))}
            </Menu>
            </>):
            (<Button onClick = {()=>{router.push("/signup")}} color="inherit">Sign Up</Button>)}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
    <Typography variant="h5" color="initial"> {userId}</Typography>
    </>
  );
}
