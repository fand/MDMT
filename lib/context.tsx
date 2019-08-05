import React, { useReducer, createContext, Dispatch } from "react";
import { reducer, initialState, AppState, Action } from "../lib/store";
import config from "./config";

type Frontmatter = typeof config.frontmatter;

interface State {
    state: AppState;
    dispatch: Dispatch<Action>;
    frontmatter: Frontmatter;
}

// eslint-disable-next-line
export const AppContext = createContext<State>({} as any);

interface Props {
    frontmatter: any; // eslint-disable-line
    children: React.ReactChild;
}

export const Provider = (props: Props): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const frontmatter: Frontmatter = {
        ...config.frontmatter,
        ...props.frontmatter
    };

    const value = { state, frontmatter, dispatch };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
