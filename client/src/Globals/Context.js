import React from 'react';

export const MobileDropdownContext = React.createContext({
  menuExpanded: false,
  expandMenu: () => {},
});
