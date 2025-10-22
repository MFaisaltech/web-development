import "./App.css";

function Product({ Title, Description, Semester }) {
  return (
    <div>
      <h2>{Title}</h2>
      <p>{Description}</p>
      <h4>{Semester}</h4>
    </div>
  );
}

export default Product;
