import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createUserPost } from "../../features/post/helpers/createUserPost";
import { Button, Input } from "antd";

const CreatePost = (type: any) => {
  const { TextArea } = Input;
  const dispatch = useAppDispatch();
  const { social_media_token } = useAppSelector((store) => store.auth);
  const [userInput, setUserInput] = useState("");

  const handelUserInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };
  console.log(userInput);

  const makeUserPost = () => {
    dispatch(createUserPost({ post: userInput, token: social_media_token }));
  };

  return (
    <div>
      <TextArea
        showCount
        maxLength={100}
        style={{
          height: 120,
          marginBottom: 24,
          width: 450,
          position: "sticky",
          top: 0,
          zIndex: 9,
        }}
        onChange={handelUserInput}
        placeholder="What's Happening"
      />
      <Button type="primary" onClick={makeUserPost}>
        Post
      </Button>
    </div>
  );
};

export default CreatePost;
