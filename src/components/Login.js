import { Box, Button, Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "..";
import firebase from "firebase/app";

function Login() {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          style={{ width: 400, background: "lightgrey" }}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              GOOGLE ORQALI KIRISH
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
