import React, { useEffect } from "react";
import { getAllBookmarks } from "../../features/bookmark/helpers/getAllBookMarks";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PostCard from "../../components/postCard/PostCard";
import SideMenu from "../../components/sideMenu/SideMenu";
import FollowDetails from "../../components/followDetails/followDetails";

const Bookmark = () => {
  const dispatch = useAppDispatch();

  const { allBookMarks } = useAppSelector((store) => store.bookmark);
  const { allPosts } = useAppSelector((store) => store.post);

  useEffect(() => {
    dispatch(getAllBookmarks());
  }, []);
  return (
    <div className="main-container">
      <SideMenu />

      <div className="common-flex-col al-center home-container">
        {allBookMarks.length === 0 ? (
          <div>
            <h2>No Bookmark</h2>
          </div>
        ) : (
          <div>
            {allBookMarks.map((data) => {
              return <PostCard data={data} />;
            })}
          </div>
        )}
      </div>
      <FollowDetails />
    </div>
  );
};

export default Bookmark;
