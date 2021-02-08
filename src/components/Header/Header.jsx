import React from 'react';

import './Header.css';

const Header = ({headTitle, headerExpanded}) => {
  return(
    <div className="head-container">
    <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" className={`head-img ${headerExpanded ? 'head-img-expanded' :'head-img-contracted'}`} alt="header-img"/>
    <h1 className={`head-img ${headerExpanded ? 'head-text-expanded' :'head-text-contracted'}`}>Just Name It!</h1>
    </div>
  );
};

export default Header;
