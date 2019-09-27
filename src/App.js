import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import AddLinkPage from "./pages/add-link-page/add-link-page.component.jsx";



import Header from './components/header/header.component.jsx';

class App extends React.Component {



  render() {
    return (
      <div>
        <Header></Header>
        <main className="pages">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add-link" component={AddLinkPage} />
        </Switch>
        </main>
      </div>
    );
  }
}


export default App;