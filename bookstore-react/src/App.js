import "./App.css";
import axios from "axios";
import Books from "./components/books";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/books";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <Header />
      <Books books={books} />
      <Footer />
    </div>
  );
}

export default App;
