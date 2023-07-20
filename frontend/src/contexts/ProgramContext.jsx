import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ProgramContext = createContext();

export function ProgramContextProvider({ children }) {
  const [programActivities, setProgramActivities] = useState([]);
  const memo = useMemo(() => {
    return {
      programActivities,
      setProgramActivities,
    };
  }, [programActivities, setProgramActivities]);
  return (
    <ProgramContext.Provider value={memo}>{children}</ProgramContext.Provider>
  );
}

ProgramContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProgramContext = () => useContext(ProgramContext);
