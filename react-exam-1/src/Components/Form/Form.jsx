
import { useState } from "react";
import "../Form/Form.css";

export const Form = () => {
  const [form, setForm] = useState({
    id: "",
    city: "",
    population: "",
    country: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(e.target.value);
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3344/data",{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            "content-type":"application/json"
        }
    }).then(()=>{
        alert("submitted")
    });
  };

  return (
    <div>
      <h1>form</h1>

      <form onSubmit={handleSubmit}>
        <input
          id="id"
          onChange={handleChange}
          type="Number"
          placeholder="Sr. no."
        />
        <br />
        <input
          id="city"
          onChange={handleChange}
          type="text"
          placeholder="City Name"
        />
        <br />
        <input
          id="population"
          onChange={handleChange}
          type="Number"
          placeholder="Population"
        />
        <br />
        <input
          id="country"
          onChange={handleChange}
          type="text"
          placeholder="Country Name"
        />
        <br />
        <input onChange={handleChange} type="Submit" value={"Submit Data"} />
      </form>
    </div>
  );
};
