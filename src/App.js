import React from "react"
import PropTypes from "prop-types"

const FoodILike = [
  {
    id: 1,
    rating: 4,
    name: "Ramen"
  },
  {
    id: 2,
    rating: 5,
    name: "Bulgogi"
  },
  {
    id: 3,
    rating: 4,
    name: "Fried potato"
  },
  {
    id: 4,
    rating: 5,
    name: "Bibimbap"
  },
  {
    id: 5,
    rating: 5,
    name: "Salad"
  }
]

function Food({ name, rating }) {
  return (
    <div>
      <h1>
        I love {name}
      </h1>
      <h3>
        {rating} / 5
      </h3>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {FoodILike.map(food => <Food key={food.id} name={food.name} rating={food.rating} />)}
    </div>
  )
}

export default App
