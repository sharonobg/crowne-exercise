//import CategoriesData from '../categories-data/categories-data.component';
import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const Categories = ({categories}) => {
  return(
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category = {category} />
      ))}
    </div>
  )
}
  
export default Categories
