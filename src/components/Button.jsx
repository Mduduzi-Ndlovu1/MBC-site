import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ name, path, classname, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (path) {
      
      navigate(path);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={path || '#'}
      className={classname}
      onClick={handleClick}
    >
      {name}
    </a>
  );
};

export default Button;
