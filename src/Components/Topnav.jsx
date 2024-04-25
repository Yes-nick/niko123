import React from 'react';
import { Menu, Button, Modal, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const { Item } = Menu;
const { TextArea } = Input;

const TopNav = () => {
  const [loginVisible, setLoginVisible] = React.useState(false);
  const [signupVisible, setSignupVisible] = React.useState(false);

  const showLoginModal = () => {
    setLoginVisible(true);
  };

  const showSignupModal = () => {
    setSignupVisible(true);
  };
  const handleLoginCancel = () => {
    setLoginVisible(false);
  };
  const handleSignupCancel = () => {
    setSignupVisible(false);
  };
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{
          lineHeight: '64px',
          height: '64px', // Fixed height to create space
          width: '100%', // Take up full width of the viewport
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'darkslateblue'
        }}
      >
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
        <Item key="about">
          <Link to="/about">About</Link>
        </Item>
        <Item key="contacts">
          <Link to="/contacts">Contacts</Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;