import{createContext, useState, useEffect} from 'react';
import { getCategoriesAndDocments} from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
    categoriesMap:{},
});
export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
   //you can't put a promise inside useEffect so:since getCategoriesAndDocments returns a promise -  make a new async inside the callback then callback from within like so:
    useEffect(() => {
        const getCategoriesMap = async ()=> {
            const categoryMap = await getCategoriesAndDocments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();

    },[]);
    const value = {categoriesMap};
    console.log(categoriesMap);
    
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
};
