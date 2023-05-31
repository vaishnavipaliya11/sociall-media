import React from "react";
import { Route , Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import { useAppSelector } from "../app/hooks";
import Home from "../pages/home/Home";
import Bookmark from "../pages/bookmark/Bookmark";
import Profile from "../pages/profile/Profile";
import Mockman from "mockman-js";
import SinglePost from "../pages/singlepost/SinglePost";
const NavigationRoutes = () => {
  const { social_media_token } = useAppSelector((store) => store.auth);
  console.log(social_media_token,"social_media_token");
  
  return (
    <>
      {!social_media_token ? (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      )}

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mock-man" element={<Mockman />} />
      <Route path="/single_post/:postId" element={<SinglePost />} />
      </Routes>
    </>
  );
};

export default NavigationRoutes;
