import { Button } from "@heroui/react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/", {replace: true});
  }

  return (
    <div className="container mt-5">
      <h1 className="font-bold" >LoginPage</h1>
      
      <Button color="primary" className="mt-4" onPress={HandleLogin}>
        Login
      </Button>
     
    </div>
  )
}
