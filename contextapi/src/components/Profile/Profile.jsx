import NameOfProfile from "./NameofProfile/NameOfProfile";

function Profile() {

    const styles = {    
  container: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center"
  }
};

  return (
    <div style={styles.container}>
      <h2>Profile</h2>
    <NameOfProfile/>
    </div>
  );
}

export default Profile;
