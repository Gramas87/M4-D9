import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Registration = () => {
  /*{const [validName, setValidName] = useState(false);
  const [validSurname, setValidSurname] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);}*/

   const [validName, setValidName] = useState("");
  const [validSurname, setValidSurname] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("")
   
  const setName = () => {
      
  }

  

  const [validSubmit, checkValidSubmit] = useState(false)

  const checkPassword = () => {
     
  }
  
/*{const enable = () => {
    if (validName && validSurname && validEmail && validPassword===true) {
        checkValidSubmit(true)
    }
}}*/

const buttonEnable = () => {
    if ((validName.length>=2) && (validSurname.length>=3) && (validEmail.includes()) )   {
        checkValidSubmit(true)
    }
}
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="surname">
          <Form.Label>surname</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="enter Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="confirm your Password" />
        </Form.Group>
       
        <Button variant="primary" controlId="submit" type="submit" disabled>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
