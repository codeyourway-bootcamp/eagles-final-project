import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
<<<<<<< HEAD
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";

=======
import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import Footer from "./componets/Footer/Footer";
import { ContainerMain } from "./componets/Container/Container";
>>>>>>> 38310c1640eba896de89a1c8f54a4b19b5588d70

function App() {
  // Usando FakeDatabase com um estado
  const [users, setUsers] = useState(null);
  useEffect(() => {
    user_registration.then((data) => {
      setUsers(data);
    });
  }, []);
<<<<<<< HEAD
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
=======
>>>>>>> 38310c1640eba896de89a1c8f54a4b19b5588d70

  return (
    <>
      {users
        ? users.data[0].user_fullname + " " + users.data[0].user_email
        : "Carregando..."}{" "}
      <Navbar />
      <Outlet /> 
      {/* <Footer /> */}
    </>
  );
}

export default App;
