import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import FollowDetails from "../../components/followDetails/followDetails";
import { Button } from "antd";
import { useAppSelector } from "../../app/hooks";

const Profile = () => {
  const { authUserData } = useAppSelector((store) => store.auth);

  const { firstName, lastName, username, bio, userImage } = authUserData;
  return (
    <div className="main-container">
      <SideMenu />

      <div className="common-flex-col al-center home-container">
        <div>
          <img src={userImage} alt="user-profile" />
          <p>
            {firstName} {lastName}
          </p>
          <p>{username}</p>
          <Button>Edit Profile</Button>
          <p>{bio}</p>
          <div>
            <p>Following</p>
            <p>Posts</p>
            <p>Followers</p>
          </div>
        </div>
        <div>
          <h2>Your Posts</h2>
        </div>
      </div>
      <FollowDetails />
    </div>
  );
};

export default Profile;
