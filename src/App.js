import React from 'react';

// npm install react-router-dom
import {BrowserRouter as Router, Route} from "react-router-dom";

// npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import react components
import NavBar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>    
      <div className="container"> 
        <NavBar />
        <br/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
          </div>
    </Router>
  );
}

export default App;
