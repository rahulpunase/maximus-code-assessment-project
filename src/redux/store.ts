import {combineReducers, createStore} from "redux";
import {IProductReducer, ProductReducer} from "./reducers/products.reducer";
import {CartReducer, ICartReducer} from "./reducers/cart.reducers";
import {AuthReducer, IAuthReducer} from "./reducers/auth.reducer";

export interface IAction<T> {
	type: string;
	payload: T;
}

export interface IStore {
	productsReducer: IProductReducer,
	cartReducer: ICartReducer,
	authReducer: IAuthReducer
}


const combinedReducers = combineReducers({
	productsReducer: ProductReducer,
	cartReducer: CartReducer,
	authReducer: AuthReducer
});

export default createStore(combinedReducers);
