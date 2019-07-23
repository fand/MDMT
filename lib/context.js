import { useReducer, createContext } from 'react';
import reducer, { initialState } from "../lib/reducer";

export const AppContext = createContext({});
export const DispatchContext = createContext({});

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};
