const MyRecipesItem = (description, preview, time, title, id, handleDelete) => {
  return (
    <section>
      <img src={preview} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <button onClick={() => handleDelete(id)}></button>
        <div>
          <p>{time}</p>
          <button to={`/recipe/${id}`}>See recipe</button>
        </div>
      </div>
    </section>
  );
};

export default MyRecipesItem;
