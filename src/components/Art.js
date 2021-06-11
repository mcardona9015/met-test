function Art({ art }) {
  console.log(art);
  return (
    <div>
      <img src={art[0].primaryImageSmall} alt="art file" />
      <p>{art[0].artistDisplayName}</p>
      <img src={art[1].primaryImageSmall} alt="art file" />
      <p>{art[1].artistDisplayName}</p>
      <img src={art[2].primaryImageSmall} alt="art file" />
      <p>{art[2].artistDisplayName}</p>
      <img src={art[3].primaryImageSmall} alt="art file" />
      <p>{art[3].artistDisplayName}</p>
    </div>
  );
}

export default Art;
