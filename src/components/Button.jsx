import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ name, path, classname, onClick }) => {
  return (
    <button className={classname} onClick={onClick}>
      {path ? <Link to={path}>{name}</Link> : name}
    </button>
  );
};

export default Button;
