import {combineReducers, createStore} from "redux";
import {IProductReducer, ProductReducer} from "./reducers/products.reducer";
import {CartReducer, ICartReducer} from "./reducers/cart.reducers";

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStore {
	productsReducer: IProductReducer,
	cartReducer: ICartReducer
}


const combinedReducers = combineReducers({
	productsReducer: ProductReducer,
	cartReducer: CartReducer
});

export default createStore(combinedReducers);
