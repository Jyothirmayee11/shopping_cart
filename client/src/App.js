import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { MainRoutes } from "./routes";
import { InnerLayout } from "./components/InnerLayout";
import Footer from "./components/Footer";

import { store } from "./redux/store";
import "./App.scss";

function App() {
  const [categories, updateCategories] = useState([]);

  useEffect(() => {
    if (categories.length === 0) {
      fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((result) => {
          updateCategories(result);
        });
    }
  }, [categories, categories.length, updateCategories]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <InnerLayout>
            <MainRoutes />
          </InnerLayout>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
