import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Button = memo(({ name, path, classname }) => {
  return (
    <Link to={path} aria-label={name}>
      <button className={classname}>{name}</button>
    </Link>
  );
});

export default Button;
