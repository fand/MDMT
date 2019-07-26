export const initialState = {
  isHeaderVisible: false,
  isMenuVisible: false,
  color: '#FFDD0088',
};

export default function reducer(state, action) {
  switch (action.type) {
    case "reset": {
      return initialState;
    }
    case "toggleMenu": {
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible
      };
    }
    case "showHeader": {
      return {
        ...state,
        isHeaderVisible: true,
      };
    }
    case "hideHeader": {
      return {
        ...state,
        isHeaderVisible: false,
      };
    }
    default: {
      return state;
    }
  }
}
