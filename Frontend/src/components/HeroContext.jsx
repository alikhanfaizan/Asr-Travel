import { createContext,  useState } from "react";

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [heroBg, setHeroBg] = useState(null);
  return (
    <HeroContext.Provider value={{ heroBg, setHeroBg }}>
      {children}
    </HeroContext.Provider>
  );
};

