import { useNavigate } from "react-router-dom";
import classes from "./RecipeCard.module.css";


const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className={classes.recipe_card}>
      <div>
          <img
            src={recipe.image_url}
            alt={recipe.recipe_name}
          />
        <h2>{recipe.recipe_name}</h2>
      </div>
      <button className="blue-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
