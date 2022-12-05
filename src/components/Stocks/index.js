import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  const history = useHistory();

  let loggedIn = true;
  if (!loggedIn) return <Redirect to="/not-logged-in" />;
  const handleClick = () => {
    window.alert("Sendign info to the DB!");
    history.push("/movies");
    
  };

  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
