import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { MainRoutes } from "./routes";
import { InnerLayout } from "./components/InnerLayout";
import Footer from "./components/Footer";

import { store } from "./redux/store";
import { fetchApi } from "./utils/fetchApi";
import { URL } from './constants/api'; 
import "./App.scss";

function App() {
  const [categories, updateCategories] = useState([]);

  const fetchCategories = async () => {
    const response  = await fetchApi(URL + '/categories')
    console.log("response", response);
    updateCategories(response);
  }

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
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
