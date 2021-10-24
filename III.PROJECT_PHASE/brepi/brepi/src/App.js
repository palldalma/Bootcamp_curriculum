import Tiles from "./Tiles";

function App() {
  const title = "BeerLak";

  return (
    <div className="App">
      <div className="content">
        <h1 className="app-header">{title}</h1>
        <Tiles />
      </div>
    </div>
  );
}

export default App;
