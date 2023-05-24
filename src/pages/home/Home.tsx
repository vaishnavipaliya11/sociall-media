import { useEffect } from "react";
import "../../styles.css";
import SideMenu from "../../components/sideMenu/SideMenu";
import FollowDetails from "../../components/followDetails/followDetails";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllPosts } from "../../features/post/helpers/getAllPost";
import PostCard, { cardDatatype } from "../../components/postCard/PostCard";
import CreatePost from "../../components/postCard/CreatePost";

const Home = () => {
  const dispatch = useAppDispatch();
  const { allPosts } = useAppSelector((store) => store.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div className="main-container">
      <SideMenu />

      <div className="common-flex-col al-center home-container">
        <div>
          <CreatePost type={"post"}/>
        </div>
        {allPosts?.map((data: cardDatatype) => {
          return <PostCard data={data} />;
        })}
      </div>
      <FollowDetails />
    </div>
  );
};

export default Home;
