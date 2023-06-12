import React from "react";
import './CategoryItem.style.scss'

export default function CategoryItem(props) {
    const {imageUrl,title} = props.item
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
