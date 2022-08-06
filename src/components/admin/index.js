import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import StoreIcon from '@mui/icons-material/Store';
import { slide as Menu } from 'react-burger-menu'



const Admin = () => {
  const options = [
    {
      name: "Add New Florist",
      icon: <AddBusinessIcon />,
      link: "/admin/addflorist",
    },
    {
      name: "Manage Florist",
      icon: <StoreIcon />,
      link: "/admin/managerflorist",
    },
    {
      name: "Manage Flowers",
      icon: <LocalFloristIcon />,
      link: "/admin/manageflower",
    },
  ];


  return (
    // <Sidebar title="Admin Dashboard" options={options}>

    // </Sidebar>
    <div>
      <Menu>
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="about" className="menu-item" to="/about">About</Link>
        <Link id="contact" className="menu-item" to="/contact">Contact</Link>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
      <Outlet />
    </div>
  );
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default Admin;
