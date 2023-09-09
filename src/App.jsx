import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";






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
   {users
          ? users.data[0].user_fullname + " " + users.data[0].user_email
          : "Carregando..."}{" "}
   
    <div>Hello Word</div>
    
      <Outlet/>
    

    </>

  );
}

export default App;
