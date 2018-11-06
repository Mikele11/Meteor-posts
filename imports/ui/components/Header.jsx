import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/create">New Post</NavLink>
        <NavLink activeClassName="active" to="/about">About Page</NavLink>
        <LoginButtons align='left' />
      </header>
    );
  }
}
