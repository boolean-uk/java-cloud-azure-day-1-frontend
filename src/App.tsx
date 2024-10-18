import { useEffect, useState } from "react";

type Producer = {
  id: number;
  name: string;
  things: Thing[];
};

type Thing = {
  id: number;
  name: string;
  price: number;
  producer: Producer;
};

function App() {
  const [things, setThings] = useState<Thing[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/things")
      .then((res) => res.json())
      .then((body) => setThings(body));
  }, []);

  return (
    <>
      <div>
        {things.map((thing) => (
          <div key={thing.id}>
            <p>Name: {thing.name}</p>
            <p>Price: {thing.price}</p>
            <p>Producer: {thing.producer.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
