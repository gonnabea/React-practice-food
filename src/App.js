import React from 'react';
import PropTypes, { number } from "prop-types";


function Food({id, name, image, rating}){
  
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
  <img src={image} alt={name}/> </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

const foodILike = [{
  id:1,
  name: "Kimchi",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCEUhE3WxIu1yoQmdX9NgQu-itL5s4Xc8vyG0c2LIMu3t3Gdii",
  rating: 3.5
},
{
  id:2,
  name: "Ramen",
  image:"https://previews.123rf.com/images/james3035/james30351709/james3035170900127/86044101-korean-food-ramen.jpg",
  rating: 4
},
{
  id:3,
  name: "Nakji",
  image:"https://cdn.crowdpic.net/list-thumb/thumb_l_13D5B6E28ABD4096EA83E11163E65D58.jpg",
  rating: 4.8
}
]

function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
