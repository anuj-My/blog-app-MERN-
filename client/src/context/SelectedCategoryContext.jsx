import { createContext, useState } from "react";

export const SelectedCategoryContext = createContext();

const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const value = { selectedCategory, setSelectedCategory };

  return (
    <SelectedCategoryContext.Provider value={value}>
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export default SelectedCategoryProvider;
