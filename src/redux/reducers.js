const initialState = {
  lang: "ja",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
}
