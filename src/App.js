import "./App.css";
import BookForm from "./component/BookForm";
import BookList from "./component/BookList";
import Navbar from "./component/Navbar";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
