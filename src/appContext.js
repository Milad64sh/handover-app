import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = (props) => {
  const [openItem, setOpenItem] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleOpenItem = () => {
    setOpenItem((prevOpenItem) => !prevOpenItem);
    setIsClicked((prevClicked) => !prevClicked);
  };
  return (
    <AppContext.Provider value={{ openItem, isClicked, toggleOpenItem }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
