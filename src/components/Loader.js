function Loader() {
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

export default Loader;
