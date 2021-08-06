import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "..";

function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent={"flex-end"}>
            {user ? (
              <Button
                color="Secondary"
                variant={"contained"}
                onClick={() => auth.signOut()}
              >
                EXIT
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button color="secondary" variant={"contained"}>
                  LOGIN
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
