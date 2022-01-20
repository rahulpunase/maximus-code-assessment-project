import productData from '../../data/product.json';
import {IAction} from "../store";
export interface IProduct {
	"id":string,
	"name":string,
	"price":number,
	"discount":number,
	"category":string,
}

export interface IProductReducer {
	products: Array<IProduct>
}

const defaultState: IProductReducer = {
	products: productData
}

export const ProductReducer = (state: IProductReducer = defaultState, action: IAction<any>) => {
	return state;
}
