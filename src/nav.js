import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    socialMediaIcons: {
        marginLeft: 'auto'
    }
}))

export default function Navigation() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuClick = (evt) => {
        setAnchorEl(evt.currentTarget);
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar color="primary">
                <Toolbar>
                    <IconButton 
                    edge="start" 
                    className={classes.menuButton} 
                    aria-controls="nav-menu" 
                    aria-haspopup="true"
                    color="inherit" 
                    onClick={handleMenuClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu 
                    id="nav-menu" 
                    anchorEl={anchorEl} 
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}>
                        <MenuItem onClick={handleCloseMenu}>Home</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Image Gallery</MenuItem>
                    </Menu>
                    <div className={classes.socialMediaIcons}>
                        <IconButton color="inherit" edge="end">
                            <Instagram/>
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <Facebook/>
                        </IconButton>
                        <IconButton color="inherit" edge="end">
                            <Twitter/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}