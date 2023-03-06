//import CategoriesData from '../categories-data/categories-data.component';
import './category-item.styles.scss';

const CategoryItem  = ({ category }) => {
    const {imageUrl, title } = category;
    return ( 
            <div className='home-category-container'>
                <div className='background-image' style={
                  { 
                    background: `url(${imageUrl})`
                    }
                  
                }/>
                <div className='category-body-container'>
                  <h2>{title}</h2>
                  <p>Shop Now</p>
                </div>
              </div>
            ) 
}


export default CategoryItem