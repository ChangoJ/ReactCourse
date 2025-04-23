import { Button } from "@heroui/react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const HandleLogin = () => {

    login('Jordan Chango');

    navigate("/", {replace: true});
  }

  return (
    <div className="container  m-5">
      <h1 className="font-bold" >LoginPage</h1>
      
      <Button color="primary" className="mt-4" onPress={HandleLogin}>
        Login
      </Button>
     
    </div>
  )
}
