import {createContext} from 'react';

const ProductContext = createContext({
    addToCart: () => {},
    products: [],
    shoppingCart: [],
})
export default ProductContext