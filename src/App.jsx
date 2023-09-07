import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./componets/Navbar";
import { GlobalStyle } from "./componets/Styles/Styles";




function App() {
  // Usando FakeDatabase com um estado
  const [users, setUsers] = useState(null);
  useEffect(() => {
    user_registration.then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
     <GlobalStyle/>
       <Navbar/> 
      <div>Hello Word</div>
      <div>
        <Home/>
        <Dashboard/>
        <Register/>
        <Login/> 
        
        
        {users
          ? users.data[0].user_name + " " + users.data[0].user_email
          : "Carregando..."}{" "}
     
      </div> 
      
    </>

  );
}

export default App;
