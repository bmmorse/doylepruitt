import React from 'react';

// Menu components
import VisibleMenu from './_visible';
import HiddenMenu from './_hidden';

const MenuFunc = (props) => {
  return (
    <>
      <VisibleMenu isHidden={props.isHidden} handleClick={props.handleClick} />
      <HiddenMenu isHidden={props.isHidden} handleClick={props.handleClick} />
    </>
  );
};

export default MenuFunc;
