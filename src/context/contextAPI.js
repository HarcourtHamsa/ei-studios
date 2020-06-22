import React, {createContext, useState} from 'react';

export const AppContext = createContext ();

const AppProvider = props => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState (true);

  return (
    <AppContext.Provider value={[sidebarIsOpen, setSidebarIsOpen]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
