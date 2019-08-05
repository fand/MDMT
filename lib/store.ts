export interface AppState {
    isHeaderVisible: boolean;
    isMenuVisible: boolean;
}

export const initialState: AppState = {
    isHeaderVisible: false,
    isMenuVisible: false
};

export type Action =
    | { type: "showMenu" }
    | { type: "hideMenu" }
    | { type: "showHeader" }
    | { type: "hideHeader" };

export function reducer(state: AppState, action: Action): AppState {
    if (process.env.NODE_ENV !== "production") {
        console.log(">> action", action);
    }

    switch (action.type) {
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
