import React from 'react';

const SocialButton = ({ icon }) => {
  return (
    <button className="btn btn-primary mr-2">
      <i className={icon}></i>
    </button>
  );
}

export default SocialButton;
