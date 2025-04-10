import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

const {user} = useContext(UserContext);

    return (
     <>
      <div>HomePage {user?.name} </div>
      <hr/>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

     </>
    )
  }
  