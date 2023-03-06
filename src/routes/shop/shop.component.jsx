import {useContext} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {Routes,Route} from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';
const Shop = () => {
    const{categoriesMap} = useContext(CategoriesContext);
    
    return (
     <Routes>
        <Route index element ={<CategoriesPreview />} />
        <Route path=':category' element ={<Category />} />
     </Routes> 
    )
};
export default Shop;