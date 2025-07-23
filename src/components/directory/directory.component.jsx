import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

//we use this comp in the home page to display all the shopping categories
const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
