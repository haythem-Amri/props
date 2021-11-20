import "./App.css";
import Card from "./profile/Card";
import { data } from "./allinfo/data";
function App() {
  const handleBooking = (title) => alert(`you book ${title}`);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((data, index) => (
          <div className="card-container" key={index}>
            <Card
              data={data}
              onClick={() => handleBooking(data.title)}
            />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
