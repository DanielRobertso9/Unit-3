import classes from "./DetailScreen.module.css";

const DetailImage = ({img, name}) => {
    return (
        <div
        className={classes.img_container}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${img})`,
        }}
      >
        <div className={classes.recipe_name}>
          <h1>{name}</h1>
        </div>
      </div>
    )
}

export default DetailImage