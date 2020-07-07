import React from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App bg-gray-800">
      <header className="bg-indigo-500 text-center text-6xl h-40">
        Weather App
      </header>
      <main className="container mx-auto -my-12">
        <Form />
        <CardList />
      </main>
    </div>
  );
}

export default App;
