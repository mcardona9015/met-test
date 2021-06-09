function Art({ art }) {
  // const [img]
  console.log(art);
  //   fetch(
  //     `https://collectionapi.metmuseum.org/public/collection/v1/objects/${art}`
  //   )
  //     .then((res) => res.json())
  //     .then(console.log);

  return (
    <div>
      <img src={art.primaryImageSmall} alt="random artwork"></img>
      <p>{art.artistDisplayName}</p>
    </div>
  );
}

export default Art;
