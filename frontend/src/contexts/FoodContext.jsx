import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const FoodContext = createContext();

export default FoodContext;

export function FoodContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [food, setFood] = useState();

  const memo = useMemo(() => {
    return {
      food,
      setFood,
    };
  }, [food, setFood]);

  return <FoodContext.Provider value={memo}>{children}</FoodContext.Provider>;
}

FoodContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFoodContext = () => useContext(FoodContext);
