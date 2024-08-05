
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Category, Message, AccountCircle } from '@mui/icons-material';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

const HRSidePanel = () => {
  return (
    <div className='hr-side-panel'>
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/hr-dashboard">
          <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/hr-dashboard/manage-employees">
          <ListItemIcon><Category /></ListItemIcon>
          <ListItemText primary="Manage Employees" />
        </ListItem>
        <ListItem button component={Link} to="/hr-dashboard/leave-requests">
          <ListItemIcon><Message /></ListItemIcon>
          <ListItemText primary="Leave Requests" />
        </ListItem>
        <ListItem button component={Link} to="/hr-dashboard/profile">
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default HRSidePanel;
