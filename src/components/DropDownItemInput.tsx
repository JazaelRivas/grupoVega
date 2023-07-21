import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import "../styles/global.scss"
import WhatsappInpunt from './WhatsappInput';

interface DropdownItemProps {
  pregunta: string;

}

const DropDownItemInput: React.FC<DropdownItemProps> = ({ pregunta }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false)
  };
  return (
    <li className='dropdownInput'>
      <button
        className='dropdownButton'
        onClick={toggleDropdown}
      >
        {pregunta}
      </button>
      <div
        style={{
          maxHeight: showDropdown ? '100px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
       
      >
        {/* Your content for the dropdown */}
        <WhatsappInpunt className="modalMenuButton" pregunta={pregunta} />
      </div>
    </li>
  );
};

export default DropDownItemInput;
