import { FavoriteBorder, Grade, StarHalf, Whatshot } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { breakfast, lunch, dinner } from '../data'
import TopBar from '../topBar/TopBar'
import './meal.css'

const Meal = ({data}) => {

  return (
    <>
    <div className='meal' id='meal'>
      <div className="mealContainer">
        {data.map((breakfastMeals) => (
          <div className="mealBox" key={breakfastMeals.id}>
          <div className="imgBox">
            <img src={breakfastMeals.img} alt="" className="imgBoxImg" />
            <div className="likeIcon">
              <FavoriteBorder className='heart' style={{ color: 'white'}} />
            </div>
            <div className="black"></div>
          </div>
          <div className="foodDetails">
            <div className="foodName">{breakfastMeals.foodName}</div>
          </div>

          <div className="foodRatings">
            <div className="lefttext">
              <span className="tag">{breakfastMeals.tagName}</span>
            </div>
            <div className="righttext">
              <div className="stars">
                <Grade className='icons' style={{ fontSize: 18 }}/> <Grade className='icons' style={{ fontSize: 18 }} /> <StarHalf className='icons' style={{ fontSize: 18 }} />
              </div>
              <span className="reviews">{breakfastMeals.reviews} reviews</span>
            </div>
          </div>

          <div className="otherDetails">
            <div className="leftDetails">
               <Whatshot />
               <div className="kCal">
                220 - 280 Kcal
               </div>
            </div>
            <div className="rightDetails">
              <button className="buy">Buy</button>
            </div>
          </div>

          <div className="lin">
            <hr />
          </div>

          <div className="lastDeatils">
            <div className="lastleft">₦{breakfastMeals.price}</div>
            <div className="lastRight">
              <div className="munis">-</div>
              <div className="value">{breakfastMeals.price}</div>
              <div className="plus">+</div>
            </div>
          </div>
          

        </div>
        ))}  
      </div>
    </div>
  </>
  )
}

export default Meal