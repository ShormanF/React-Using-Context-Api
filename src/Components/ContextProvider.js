import React, { Component } from "react";
import MyContext from '../config/Context'

class ContextProvider extends Component{
    constructor(){
        super()
        this.state = {employees: []}
    }
 
    componentDidMount(){
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            this.setState({
                employees:data.data
            })
          console.log(data.data);
        });
    }


    render(){
        return(
            <MyContext.Provider value={{employees: this.state.employees}}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default ContextProvider;