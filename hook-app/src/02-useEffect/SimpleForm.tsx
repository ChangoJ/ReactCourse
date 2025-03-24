import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'usuario@gmail.com',
        password: '123456789'
    })

    const {username, email, password } = formState;

    const onInputChange = ({target}: any) =>{
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        

        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('formState Changed');
    }, [formState]);

    useEffect(() => {
        // console.log('Email Changed');
    }, [email]);


  return (
    <>
      <div>
        <h1>SimpleForm</h1>
      </div>
      <hr />
      <div>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>

      { (username === "strider2") && <Message /> }
    </>
  );
};
