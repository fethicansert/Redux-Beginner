import { createStore } from "redux";
import reducer from "./reduce";

const store = createStore(reducer);

export default store


//store call the reduce func say do the action and return state