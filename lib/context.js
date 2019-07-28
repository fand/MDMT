import { useEffect, useReducer, createContext } from "react";
import reducer, { initialState } from "../lib/reducer";
import config from '../config';

export const AppContext = createContext({});
export const DispatchContext = createContext({});

export const Provider = props => {
  const metadata = props.metadata || {};

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...metadata,
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = metadata.title
        ? (metadata.title + config.titleSuffix)
        : config.defaultTitle;
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
