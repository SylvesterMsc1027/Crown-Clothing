import React from 'react'
import './category.styles.scss'
import CategoryItem from '../categoryItem/CategoryItem'

const Category = (props) => {
  return (
    <>
    <div className="categories-container">
      {props.items.map((item) => (
       <CategoryItem key={item.id} item={item}/>
      ))}
    </div>
  </>
  )
}

export default Category;