import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaCode } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import MessageHome from '../MessageHome';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4527a0',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    color: '#fff',
  },
  menuIcon: {
    color: '#fff',
  },
  menuItems: {
    color: '#fff',
  },
}));

const SideDrawer = ({ items }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <MessageHome></MessageHome>
      <Toolbar>
        <FaArrowAltCircleRight
          className={classes.menuIcon}
          onClick={handleDrawerOpen}
        />
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <FaCode className={classes.menuIcon} onClick={handleDrawerClose} />
        </div>
        <List>
          {items.map((item) => (
            <ListItem button key={item.text} className={classes.menuItems}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
