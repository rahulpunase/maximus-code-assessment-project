import {combineReducers, createStore} from "redux";
import {IProductReducer, ProductReducer} from "./reducers/products.reducer";

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStore {
	productsReducer: IProductReducer,
}


const combinedReducers = combineReducers({
	productsReducer: ProductReducer,
});

export default createStore(combinedReducers);
