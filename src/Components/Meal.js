import React, { useEffect, useState } from 'react'
import MealsItem from './MealsItem'
import RecepeIndex from './RecepeIndex'


const Meal = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setItem(data.meals);
      setShow(true);
    })
  }, [url])

  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  }
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>A recipe is a series of instructions for preparing or making something in the kitchen, often a culinary meal. It means that individuals, especially chefs, use it to have the exact ingredients when preparing or cooking food.</h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
        </div>
        <div className="container">
          {
            show ? <MealsItem data={item} /> : "Not Found"

          }
        </div>
        <div className="indexContainer">
          < RecepeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>

      </div>
    </>
  )
}
export default Meal
