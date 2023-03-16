import React from 'react'
import FilledStar from '../../assets/star-filled.svg';
import EmptyStar from '../../assets/star-empty.svg';

const Star = ({isFilled,toggleFavorit}) => {
    let starIcon = isFilled ? <img src={FilledStar} alt="" width="31" height="31"/>: <img src={EmptyStar} alt="" width="31" height="31"/>
  return (
      <div onClick={toggleFavorit}>
    {starIcon}
    </div>
  )
}

export default Star
