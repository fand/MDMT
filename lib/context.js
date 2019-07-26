import { useReducer, createContext } from 'react';
import reducer, { initialState } from "../lib/reducer";

export const AppContext = createContext({});
export const DispatchContext = createContext({});

export const Provider = (props) => {
  const iState = {
    ...initialState,
    ...(props.metadata || {})
  };

  const [state, dispatch] = useReducer(reducer, iState);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};
