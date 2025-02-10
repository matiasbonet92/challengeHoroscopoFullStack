import { createContext, useContext, useState } from "react";

//creacion de contexto
const AppContext = createContext();

// creacion del provider
export const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({
      birthDate: '',
      dateOfSearch: '',
      daysToNextBirthDate: 0,
      email: '',
      gender: '',
      horoscope: '',
      id: 0,
      name: '',
      sign: '',
    });
  
    return (
      <AppContext.Provider value={{ appData, setAppData }}>
        {children}
      </AppContext.Provider>
    );
  };
  

export const useAppContext = () => useContext(AppContext);