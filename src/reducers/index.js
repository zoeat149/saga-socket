import {combineReducers} from "redux";

let dataState = {
  logindata: [],
  allstock: [],
  quotes: [],
};

const dataReducer = (state = dataState, action) => {
  state = Object.assign(state, {type: action.type});
  switch (action.type) {

    case "CHECK_LOGIN":
      {
        return {
          ...state,
          logindata: action.result
        };
      }
    case "GET_ALL_STOCK" : {
      return {
        ...state,
        allstock:[]
      }
    }
    case "GET_ALL_QUOTE": {
      let vData = action.quote.filter(item => item.id === 2100);
      
      return {
        ...state,
        quotes: vData
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({dataReducer});

export default rootReducer;
