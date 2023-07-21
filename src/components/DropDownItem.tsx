import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import "../styles/global.scss"
import WhatsappButton from './WhatsappButton';

interface DropdownItemProps {
  pregunta: string;

}

const DropdownItem: React.FC<DropdownItemProps> = ({ pregunta }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false)
  };
  return (
    <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
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
        onClick={closeDropdown}
      >
        {/* Your content for the dropdown */}
        <WhatsappButton className="modalMenuButton" pregunta={pregunta} />
      </div>
    </li>
  );
};

export default DropdownItem;
