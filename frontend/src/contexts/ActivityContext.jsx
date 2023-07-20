import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ActivityContext = createContext();

export default ActivityContext;

export function ActivityContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [activity, setActivity] = useState();

  const memo = useMemo(() => {
    return {
      activity,
      setActivity,
    };
  }, [activity, setActivity]);

  return (
    <ActivityContext.Provider value={memo}>{children}</ActivityContext.Provider>
  );
}

ActivityContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useActivityContext = () => useContext(ActivityContext);
