import React from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="bg-gray-900">
      <header className="bg-indigo-500 text-center text-6xl h-40">
        Weather App
      </header>
      <main className="container mx-auto ">
        <div className="mx-4 -my-12">
          <Form />
          <SearchResults />
          <CardList />
        </div>
      </main>
    </div>
  );
}

export default App;
