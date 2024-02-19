import { useState } from "react";

function App() {
  const [personCredentials, setPersonCredentials] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  //destructure the state
  const { firstName, lastName, age } = personCredentials;

  // handleCredentials
  const handleCredentials = (e) => {
    const { name, value } = e.target;
    setPersonCredentials((creds) => ({ ...creds, [name]: value }));
  };

  //para submit na function
  const onSubmit = (e) => {
    e.preventDefault();
    // mag submit

    // clear
    clearForm();
  };
  const clearForm = () => {
    // para clear
    setPersonCredentials(() => ({
      ...{
        firstName: "",
        lastName: "",
        age: "",
      },
    }));
  };

  console.log(personCredentials);

  return (
    <>
      <div className="container di-flex align-items-center justify-content-center">
        <form className="w-50 mt-5" onSubmit={onSubmit}>
          <input
            className="form-control my-2"
            type="text"
            placeholder="First name"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleCredentials}
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Last name"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleCredentials}
          />
          <input
            className="form-control my-2"
            type="number"
            placeholder="age"
            name="age"
            id="age"
            value={age}
            onChange={handleCredentials}
          />
          <button className="submit">Submit</button>
        </form>
      </div>
      <p className="read-the-docs">Ademel</p>
    </>
  );
}

export default App;
