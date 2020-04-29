import React from "react";
import { Container, Button } from "@material-ui/core";
import CreatePost from "../components/CreatePost";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    paddingTop: "36px",
  },
});

export default function Blog() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Button>Add Post</Button>
      <CreatePost />
    </Container>
  );
}
