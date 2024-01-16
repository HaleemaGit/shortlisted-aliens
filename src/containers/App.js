import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count , setCount] =useState(0)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users);
        console.log(count)
      }, [count]);

  });

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1 className="high">Shortlisted Aliens</h1>
      <button onClick={()=>setCount(count + 1)}>Click Me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {" "}
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}

export default App;
