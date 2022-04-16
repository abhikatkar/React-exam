import { useEffect, useState } from "react";
import axios from "axios";
import '../Home/Home.css'


export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    
  }, []);

  const getData = () => {
    axios.get("http://localhost:3344/data").then((res) => {
      setData([...res.data]);
    });
  };

  function asc() {
    let demo = data.sort((a, b) => {
      return a.population - b.population;
    });
    setData([...demo]);
  }

  function desc() {
    let demo = data.sort((a, b) => {
      return b.population - a.population;
    });
    setData([...demo]);
  }

  function del(id){
    //   console.log(id)
   axios.delete(`http://localhost:3344/data/${id}`).then((res)=>{
    setData([...res.data]);
   });
  } 
//   console.log(data);

  return (
    <div>
      {/* <h1>home</h1> */}

      <div className="sort">
        <button onClick={asc}>Sort population asc</button>
        <button onClick={desc}>Sort population desc</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr>
                <th>{d.id}</th>
                <th>{d.country}</th>
                <th>{d.city}</th>
                <th>{d.population}</th>
                <th>
                  <button>edit</button>
                </th>
                <th>
                  <button onClick={()=>{del(d.id)}}>Delete</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
