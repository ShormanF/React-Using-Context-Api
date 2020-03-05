import React from 'react';
import './App.css';
import ContextProvider from './Components/ContextProvider';
import MyContext from './config/Context'


function App() {
  return (
    <div className="App">
   <ContextProvider>
     <MyContext.Consumer>
     {data => <div>{data.employees.map(d => <ul key={d.id}><li>Employee name: {d.employee_name}</li>
     <br></br>
     <li>Employee Salary: {d.employee_salary}</li>
     <li>Employee Age: {d.employee_age}</li>
   
     </ul>)}</div>}
  
       
     </MyContext.Consumer>
   </ContextProvider>
    </div>
  );
}

export default App;
