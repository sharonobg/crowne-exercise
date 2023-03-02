import{createContext, useState, useEffect} from 'react';
import { getCategoriesAndDocments} from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
    products:[],
});
export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    //this is just ex as to how to initially interact with data:
   /*remove this as products successfully in db
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    },[]);*/
    //you can't put a promise inside useEffect so:since getCategoriesAndDocments returns a promise -  make a new async inside the callback then callback from within like so:
    useEffect(() => {
        const getCategoriesMap = async ()=> {
            const categoryMap = await getCategoriesAndDocments();
            console.log(categoryMap);
        }
        getCategoriesMap();
    },[]);
    const value = {products};

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
};
