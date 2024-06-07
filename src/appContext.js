import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = (props) => {
  const [openItem, setOpenItem] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showFormsWideScreen, setShowFormsWideScreen] = useState(false);

  const toggleOpenItem = () => {
    setOpenItem((prevOpenItem) => !prevOpenItem);
    setIsClicked((prevClicked) => !prevClicked);
    setShowFormsWideScreen(false);
  };
  const toggleAllFormsWideScreen = () => {
    setShowFormsWideScreen((prev) => !prev);
    setOpenItem(false);
  };
  return (
    <AppContext.Provider
      value={{
        openItem,
        showFormsWideScreen,
        isClicked,
        toggleOpenItem,
        toggleAllFormsWideScreen,
        setShowFormsWideScreen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
