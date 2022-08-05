const initialState = {
  someProp: someValue,
  anotherProp: anotherValue,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        someProp: someValueUpdated,
      };
    case "ANOTHER_ACTION":
      return {
        ...state,
        anotherProp: anotherValue + action.actionPayload,
      };
    default:
      return state;
  }
};
export default reducer;
