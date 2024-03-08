import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCat, getCat } from "../services/cats.js";

function CatEdit() {
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
  
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchCat();
  }, []);

  async function fetchCat() {
    const oneCat = await getCat(id);
    setCat(oneCat);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCat(id, cat);
    navigate(`/cats/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat((prevCat) => ({
      ...prevCat,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCat((prevCat) => ({
      ...prevCat,
      [name]: checked,
    }));
  };

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

export default CatEdit;
