import React from 'react';

const ChooseBox = ({icon, title, description}) => {
  return (
    <li>
      <div className="why-icon">
        <i className={icon}></i>
      </div>
      <div className="why-text">
        <h4>{title}</h4>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
}

export default ChooseBox;
