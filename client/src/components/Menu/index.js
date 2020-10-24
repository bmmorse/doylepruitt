import React from 'react';

// Menu components
import VisibleMenu from './_visible';
import HiddenMenu from './_hidden';

/**
 * Visible Menu
 *   - the desktop Navbar, changes to single 'Menu' button in mobile
 *
 * Hidden Menu
 *   - the hidden mobile menu
 *
 * @props mobileMenu | boolean
 *   this.state.mobileMenu, defaults to false
 *
 * @props toggleMenu | function
 *   this.toggleMenu, function that changes mobileMenu
 */

const MenuFunc = (props) => {
  return (
    <>
      <VisibleMenu
        mobileMenu={props.mobileMenu}
        toggleMenu={props.toggleMenu}
      />
      <HiddenMenu mobileMenu={props.mobileMenu} toggleMenu={props.toggleMenu} />
    </>
  );
};

export default MenuFunc;
