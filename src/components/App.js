import { useEffect, useState } from "react";
import "../App.css";
import Art from "./Art";

function App() {
  const [art, setArt] = useState(null);

  useEffect(() => {
    const url =
      "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting";
    const artFetch = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const objectIds = [];
      for (let i = 0; i < 4; i++) {
        objectIds.push(
          data.objectIDs[[Math.floor(Math.random() * data.objectIDs.length)]]
        );
      }
      const randomArt = await Promise.all(
        objectIds.map(async (id) => {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          const data = await res.json();
          return data;
        })
      );
      setArt(randomArt);
    };
    artFetch();

    // fetch(
    //   "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=gogh"
    // )
    //   .then((res) => res.json())
    //   // .then(setArt);
    //   .then((data) => {
    //     console.log("artwork object ids:", data);
    //     const randomImg =
    //       data.objectIDs[[Math.floor(Math.random() * data.objectIDs.length)]];
    //     return fetch(
    //       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomImg}`
    //     );
    //   })
    //   .then((res) => res.json())
    //   .then(setArt);
  }, []);

  return <div className="App">{art && <Art art={art} />}</div>;
}

export default App;
