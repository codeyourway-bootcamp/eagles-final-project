import { useEffect, useState } from "react";
import { user_registration } from "./FakeDatabase";
import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";
import Footer from "./componets/Footer/Footer";
import { ContainerMain } from "./componets/Container/Container";

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
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

export default App;
