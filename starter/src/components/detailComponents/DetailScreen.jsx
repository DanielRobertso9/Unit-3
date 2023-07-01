import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailImage from "./DetailImage";
import RecipeDetail from "./RecipeDetail";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <DetailImage img={recipe.image_url} name={recipe.recipe_name} />
      <RecipeDetail recipe={recipe} />
    </section>
  );
};

export default DetailScreen;
