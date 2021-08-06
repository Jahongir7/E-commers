import { Container, Grid } from "@material-ui/core";

function Loader() {
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loader;
