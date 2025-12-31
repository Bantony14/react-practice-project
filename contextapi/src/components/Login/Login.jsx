import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";

function Login() {
  const {setUsername} = useContext(UserContext);
  const [input,setInput] = useState("")
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(input)

  
  }

  const styles = {
  container: {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px",
    fontSize: "16px"
  },
  button: {
    padding: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};


  return (
    <>
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

     
    </div>
   
    </>
  );
}

export default Login;
