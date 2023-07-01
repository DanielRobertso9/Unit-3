import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeContainer from "../recipeComponents/RecipeContainer";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getData = () => {
    axios.get(`https://recipes.devmountain.com/recipes`).then((res) => {
      setRecipes(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
