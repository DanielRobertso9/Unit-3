import { useState } from "react";
import RecipeCard from "../recipeComponents/RecipeCard";
import classes from "./RecipeContainer.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState('');

    const recipeSearch = recipes
      .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase();
        let searchParams = search.toLowerCase();
        return title.includes(searchParams);
      }) 
      .map((recipe, index) => {
        return <RecipeCard recipe={recipe} />;
      });

  return (
    <section className={classes.recipe_section}>
      <span className={classes.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          placeholder="Search for a Recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <div className={classes.recipe_container}>
        {recipeSearch ? recipeSearch : <h2>No Recipes :(</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer
