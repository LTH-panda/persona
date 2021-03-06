import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import ui from "./ui";
import persona from "./persona";
import slider from "./slider";

const rootReducer = combineReducers({
  ui,
  persona,
  slider,
});

const reducer = (state: any, action: { type: string; payload: any }) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return rootReducer(state, action);
};

export default reducer;
export type RootState = ReturnType<typeof rootReducer>;
