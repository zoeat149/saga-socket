import {combineReducers} from "redux";

let dataState = {
  loading :false,
  logindata: []
};

const dataReducer = (state = dataState, action) => {
  state = Object.assign(state, {type: action.type});
  switch (action.type) {

    case "CHECK_LOGIN":
      {
        return {
          ...state,
          loading: false,
          logindata: action.result
        };
      }

    default:
      return state;
  }
};

const rootReducer = combineReducers({dataReducer});

export default rootReducer;
