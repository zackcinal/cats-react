import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCat } from "../services/cats.js";

function CatCreate() {
  const [cat, setCat] = useState({
    name: "",
    aka: "",
    bio: "",
    age: 0,
    gender: "",
    species: "",
    likesCuddles: true,
    image: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCat(cat);
    navigate("/cats");
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setCat((prevCat) => ({
      ...prevCat,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setCat((prevCat) => ({
      ...prevCat,
      [name]: checked
    }))
  }

  return (
    <div>
      <h1>Add a cute cat in our database</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your cat's name"
          name="name"
          value={cat.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Nickname"
          name="aka"
          value={cat.aka}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          value={cat.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="gender"
          value={cat.gender}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bio"
          name="bio"
          value={cat.bio}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Species"
          name="species"
          value={cat.species}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add image url"
          name="image"
          value={cat.image}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="cuddles-box">
            Likes Cuddles:
            <input
              id="cuddles-box"
              type="checkbox"
              name="likesCuddles"
              checked={cat.likesCuddles}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <button type="submit">Create your cat</button>
      </form>
    </div>
  );
}

export default CatCreate;
