import React from 'react';

import axios from 'axios';

 const spoonUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/convert?ingredientName=flour&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams'


const mashapeKey = '56OOXfxZXcmsh4XJelNuVBN7T1NBp1BWuWqjsnjYgQx5Biq42x'

export default class Recipes extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
      axios.get(spoonUrl, {headers: {'X-Mashape-Key': mashapeKey, 'Accept': 'application/json'}})
        .then(res => {
      console.log(res.data);
        })
    }
  render() {
    return (
      <div>
        console.log(res.data);
      </div>
    )
  }
}
