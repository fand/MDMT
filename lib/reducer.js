export const initialState = {
  isHeaderVisible: false,
  isMenuVisible: false,
  color: "#FFDD0088",
  lang: "en"
};

export default function reducer(state, action) {
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
