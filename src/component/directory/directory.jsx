import React from 'react'
import './category.styles.scss'
import DirectoryItem from '../Directory-Item/DirectoryItem'

const Directory = (props) => {
  return (
    <>
    <div className="categories-container">
      {props.items.map((item) => (
       <DirectoryItem key={item.id} item={item}/>
      ))}
    </div>
  </>
  )
}

export default Directory;