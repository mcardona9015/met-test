import { useEffect, useState } from "react";
import "../App.css";
import Art from "./Art";

function App() {
  const [art, setArt] = useState(null);

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting"
    )
      .then((res) => res.json())
      // .then(setArt);
      .then((data) => {
        console.log("artwork object ids:", data);
        const randomImg =
          data.objectIDs[[Math.floor(Math.random() * data.objectIDs.length)]];
        return fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomImg}`
        );
      })
      .then((res) => res.json())
      .then(setArt);
  }, []);

  return <div className="App">{art && <Art art={art} />}</div>;
}

export default App;