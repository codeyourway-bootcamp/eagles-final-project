import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";


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
   <Navbar/>
    <Home/>
    
      <div>
        {users
          ? users.data[0].user_name + " " + users.data[0].user_email
          : "Carregando..."}{" "}
     
      </div> 
    </>

  );
}

export default App;
