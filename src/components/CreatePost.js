import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHTMLParser from "react-html-parser";
import firebase from "firebase";
import { Button } from "@material-ui/core";

export default function CreatePost() {
  const [content, updateContent] = useState("");
  const PostRef = firebase.firestore().collection("posts");
  const submitPost = () => {
    PostRef.add({
      content,
      title: "demo",
    })
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          console.log(data);
          updateContent(data);
        }}
      ></CKEditor>
      <Button onClick={submitPost}>Post</Button>
      <div>{ReactHTMLParser(content)}</div>
    </>
  );
}
