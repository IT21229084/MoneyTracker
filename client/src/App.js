import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder="+200 Rice" />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder="description" />
        </div>
        <button>Add New Transcations</button>
      </form>
      <div className="transcations">
        <div className="transcation">
          <div className="left">
            <div className="name">New Mobile phone</div>
            <div className="des">This is my first Mobile Phone.</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2024-01-10 18:10</div>
          </div>
        </div>
      </div>
      <div className="transcations">
        <div className="transcation">
          <div className="left">
            <div className="name">New Mobile phone</div>
            <div className="des">This is my first Mobile Phone.</div>
          </div>
          <div className="right">
            <div className="pricered">-$500</div>
            <div className="datetime">2024-01-10 18:10</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
