export interface AppState {
    isHeaderVisible: boolean;
    isMenuVisible: boolean;
    color: string;
}

export type Action =
    | { type: "reset" }
    | { type: "showMenu" }
    | { type: "hideMenu" }
    | { type: "showHeader" }
    | { type: "hideHeader" };

export const initialState = {
    isHeaderVisible: false,
    isMenuVisible: false,
    color: "#FFDD0088"
};

export default function reducer(state: AppState, action: Action): AppState {
    if (process.env.NODE_ENV !== "production") {
        console.log(">> action", action);
    }

    switch (action.type) {
        case "reset": {
            return initialState;
        }
        case "showMenu": {
            return {
                ...state,
                isMenuVisible: true
            };
        }
        case "hideMenu": {
            return {
                ...state,
                isMenuVisible: false
            };
        }
        case "showHeader": {
            return {
                ...state,
                isHeaderVisible: true
            };
        }
        case "hideHeader": {
            return {
                ...state,
                isHeaderVisible: false
            };
        }
        default: {
            return state;
        }
    }
}
