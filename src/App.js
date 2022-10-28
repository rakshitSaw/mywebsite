import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ResponsiveAppBar from "./components/Navbar/ResponsiveAppBar";
import MovieDetails from "./components/movieDetail/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Navbar from "./components/Navbar/Navbar";
import MyNavbar from "./components/Navbar/MyNavbar";
import "./App.css";
import ProductDetails from "./components/Products/ProductDetails";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Router>
        <ResponsiveAppBar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Movies" exact component={Home} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/Products" component={ProductDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
