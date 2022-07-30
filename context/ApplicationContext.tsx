import { createContext } from 'react';
import { ReactProps } from 'types';

const ApplicationContext = createContext(null);

const ApplicationProvider = ({ children }: ReactProps) => {
  return (
    <ApplicationContext.Provider value={null}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { ApplicationContext, ApplicationProvider };
