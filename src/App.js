import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Employes from "./components/Employes/Employes";
import Home from "./components/Home/Home";


class App extends React.Component {


    render() {
        return (
            <div className="App">

                <Route
                    path='/'
                    render={ () => <Home /> }
                />
                <Route
                    path='/employes'
                    render={ () => <Employes /> }
                />
            </div>
        )
    }

}

export default App;
