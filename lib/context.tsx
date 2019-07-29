import React, { useEffect, useReducer, createContext } from "react";
import reducer, { initialState } from "../lib/reducer";
import config from "../config";

export const AppContext = createContext({});
export const DispatchContext = createContext({});

interface Props {
  frontmatter: any; // eslint-disable-line
  children: React.ReactChild;
}

export const Provider = (props: Props): React.ReactElement => {
  const frontmatter = props.frontmatter || {};

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...frontmatter
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = frontmatter.title || config.defaultTitle;
    }
  }, [frontmatter.title]);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};

Provider.propTypes = {};
