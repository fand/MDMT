import React, { useEffect, useReducer, createContext } from "react";
import reducer, { initialState } from "../lib/reducer";
import config from "../config";

export const AppContext = createContext({});
export const DispatchContext = createContext({});

interface Props {
  metadata: any;
  children: React.ReactElement[];
}

export const Provider = (props: Props): React.ReactElement => {
  const metadata = props.metadata || {};

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...metadata
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = metadata.title || config.defaultTitle;
    }
  }, [metadata.title]);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};

Provider.propTypes = {};
