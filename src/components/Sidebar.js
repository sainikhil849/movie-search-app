import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Movie Search App</h2>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/list" activeClassName="active">Movie List</NavLink>
      <NavLink to="/detail" activeClassName="active">Movie Detail</NavLink>
    </div>
  );
}

export default Sidebar;
