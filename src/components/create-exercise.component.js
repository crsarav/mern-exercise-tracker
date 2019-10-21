import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component{
    constructor(props)
    {
        super(props);

        // this has to be binded to class 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        // initialize the state of each element
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    // hard code one value before we connect to backend Mongo
    // right before anything loads in the page
    componentDidMount()
    {
        this.setState(
            {
                users: ['test user'],
                username: 'test user'
            }
        )
    }

    onChangeUsername(e)
    {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e)
    {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e)
    {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date)
    {
        this.setState({
            date: date
        });
    }
// prevent default on submit event
    onSubmit(e)
    {
        e.preventDefault();

        // set a varible within a method and it will remain within the method
        const exercise = 
        {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date 
        }
        // see what's being passed onto backend 
        console.log(exercise);
        console.log("create exercise update complete!")

        // on submit go back to home page with list of exercises 
        window.location = '/';
    }


    render(){
        return(
            <div> 
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label> 
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user)
                                {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description: </label> 
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>                

                    <div className="form-group">
                        <label>Duration (in minutes): </label> 
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>

                     <div className="form-group">
                        <label>Date: </label> 
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>  

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div>             
                </form>  
            </div>      

        );
    
    
    }
}