import React from "react";
import Login from '../components/login';
import '../App.css';


const Register = () => (
    <div className='login'>
        <h2 >Cadastro</h2>
        <form >
        <label for="name">Nome:</label><br></br>
         <input type="text"  name="name"></input><br></br>
         <br></br>
        <label for="email">E-mail:</label><br></br>
         <input type="text"  name="email"></input><br></br>
         <br></br>
         <label for="password">Senha:</label><br></br>
         <input type="text"  name="password"></input>
         <br></br>
         <input type="submit" value="Submit"></input>
         <br></br>
         <input type="radio" name="hall" value="hall"></input>
         <label for="hall">Salão</label><br></br>
         <input type="radio" name="kitchen" value="kitchen"></input>
         <label for="kitchen">Cozinha</label><br></br>
        </form>
       
    </div>
);

export default Register;