import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/app";

function Chat() {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
          marginTop: 5,
        }}
        justifyContent={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowX: "auto",
            backgroundColor: "rgb(192, 216, 223)",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                backgroundColor:
                  user.uid === message.uid
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(228, 83, 167, 0.549)",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "40%",
                padding: 5,
                borderRadius: "10px",
              }}
            >
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            placeholder={"Xabar"}
            fullWidth
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant={"outlined"}
            style={{ background: "green", marginTop: 2 }}
            onClick={sendMessage}
          >
            Xabar yuborish
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Chat;
