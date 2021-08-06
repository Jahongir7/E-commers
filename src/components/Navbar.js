import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/const";

function Navbar() {
  const user = false;
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent={"flex-end"}>
            {user ? (
              <Button color="Secondary" variant={"contained"}>
                Quit
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button color="secondary" variant={"contained"}>
                  Login
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
