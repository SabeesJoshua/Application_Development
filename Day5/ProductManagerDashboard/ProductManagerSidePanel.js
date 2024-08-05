// src/components/dashboards/ProductManagerDashboard/ProductManagerSidePanel.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, Assignment, Schedule, Create,AccountCircle} from '@mui/icons-material';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import './ProductManagerSidePanel.css';

const ProductManagerSidePanel = () => {
  return (
    <div className='product-manager-side-panel'>
      <List>
        <ListItem button component={Link} to="/product-manager-dashboard/home">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/product-manager-dashboard">
          <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/product-manager-dashboard/assign-employees">
          <ListItemIcon><Assignment /></ListItemIcon>
          <ListItemText primary="Assign Employees" />
        </ListItem>
        <ListItem button component={Link} to="/product-manager-dashboard/view-team-lead-schedule">
          <ListItemIcon><Schedule /></ListItemIcon>
          <ListItemText primary="View Team Lead Schedule" />
        </ListItem>
        <ListItem button component={Link} to="/product-manager-dashboard/create-projects">
          <ListItemIcon><Create /></ListItemIcon>
          <ListItemText primary="Create Projects" />
        </ListItem>
        <ListItem button component={Link} to="/product-manager-dashboard/profile">
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default ProductManagerSidePanel;
