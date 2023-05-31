import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import FollowDetails from "../../components/followDetails/followDetails";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSinglePost } from "../../features/post/helpers/getSinglePost";
import {
  HeartFilled,
  HeartOutlined,
  CommentOutlined,
  SaveFilled,
  SaveOutlined,
} from "@ant-design/icons";
import { dislikePost } from "../../features/post/helpers/dislikePost";
import { getAllPosts } from "../../features/post/helpers/getAllPost";
import { likeUserPost } from "../../features/post/helpers/likeUserPost";
import { removeBookMarkedPost } from "../../features/bookmark/helpers/removeBookMarkPost";
import { bookMarkPost } from "../../features/bookmark/helpers/bookMarkPost";
import "./singlePost.css";
import "../../styles.css";
import { Button, Input } from "antd";
import { getPostComment } from "../../features/post/helpers/getPostComment";
import { addComment } from "../../features/post/helpers/addComment";
import { Avatar, List, Skeleton } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";
import { editUserComment } from "../../features/post/helpers/editComment";
import { deleteComment } from "../../features/post/helpers/deleteComment";

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { singlePostData, postComment, allPosts } = useAppSelector(
    (store) => store.post
  );
  const { authUserData, social_media_token } = useAppSelector(
    (store) => store.auth
  );
  const { allBookMarks } = useAppSelector((store) => store.bookmark);

  const [isCommentEditable, setIsCommentEditable] = useState(false);

  const isBookMarked = allBookMarks?.find(
    (post: any) => post?._id === singlePostData?._id
  );

  const [commentInput, setCommentInput] = useState("");
  const [editComment, setEditComment] = useState(commentInput);

  console.log(singlePostData, "singlePostDataa");
  console.log(authUserData.userImage, "authUserDataa");
  // console.log(singlePostData.likes.likedBy._id , authUserData._id,"singlePostData");
  const onUserComment = (e: any) => {};
  useEffect(() => {
    dispatch(getSinglePost({ postId: postId }));
    dispatch(getPostComment({ postId: postId }));
  }, []);
  const { TextArea } = Input;

  useEffect(() => {
    dispatch(getPostComment({ postId: postId }));
    setCommentInput("");
  }, [allPosts]);
  return (
    <div className="main-container">
      <SideMenu />
      <div className="common-flex-col al-center home-container">
        <div className="singlePost-container">
          <div>
            <div className="common-flex ">
              <img
                src={singlePostData.img}
                alt="user-img"
                className="user-img"
              />
              <div className="common-flex-col al-start">
                <span className="name">
                  {singlePostData?.firstName} {singlePostData?.lastName}
                </span>
                <span className="op-sm">{singlePostData?.username}</span>
              </div>
            </div>

            <div className="common-flex-col al-start">
              <span className="user-content">{singlePostData?.content}</span>
              <span>25 maay 2021</span>
            </div>
          </div>
          <div>
            <div className="common-flex js-bet icon-container ">
              <div>
                {singlePostData?.likes?.likedBy?.find(
                  (user: any) => user._id === authUserData._id
                ) ? (
                  <HeartFilled
                    style={{ color: "#9254de" }}
                    onClick={() => {
                      dispatch(
                        dislikePost({
                          token: social_media_token,
                          postId: singlePostData._id,
                        })
                      );
                      dispatch(getAllPosts());
                    }}
                  />
                ) : (
                  <HeartOutlined
                    style={{ color: "#9254de" }}
                    onClick={() => {
                      dispatch(
                        likeUserPost({
                          postId: postId,
                        })
                      );
                      dispatch(getAllPosts());
                    }}
                  />
                )}
                {singlePostData?.likes?.likeCount >= 1
                  ? singlePostData?.likes.likeCount
                  : ""}
              </div>

              <div>
                <CommentOutlined
                  onClick={() => {
                    navigate(`/single_post/${singlePostData?._id}`);
                  }}
                  style={{ color: "#9254de" }}
                />
              </div>

              <div>
                {isBookMarked ? (
                  <SaveFilled
                    style={{ color: "#9254de" }}
                    onClick={() => {
                      dispatch(
                        removeBookMarkedPost({
                          postId: singlePostData?._id,
                          token: social_media_token,
                        })
                      );
                    }}
                  />
                ) : (
                  <SaveOutlined
                    style={{ color: "#9254de" }}
                    onClick={() => {
                      dispatch(
                        bookMarkPost({
                          postId: singlePostData?._id,
                          token: social_media_token,
                        })
                      );
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="comment-container common-flex js-around al-center gap-sm">
            <img
              className="user-img"
              src="https://res.cloudinary.com/dxebdqoxr/image/upload/v1652987212/orion-spaces/jojo_2_dwhb1p.jpg"
              alt="user-img"
            />

            <Input
              placeholder="comment your reply"
              defaultValue={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
            />
            <Button
              disabled={commentInput?.length < 1 ? true : false}
              onClick={() => {
                dispatch(
                  addComment({
                    postId: postId,
                    commentData: commentInput,
                    token: social_media_token,
                  })
                );
              }}
            >
              Reply
            </Button>
          </div>

          <List
            itemLayout="horizontal"
            dataSource={postComment}
            size="small"
            renderItem={(item: any, index) => {
              console.log(item, "itemm");

              return (
                <List.Item
                  className="comment-box"
                  actions={[
                    <Button
                      onClick={() => {
                        setIsCommentEditable(true);
                      }}
                    >
                      edit
                    </Button>,
                    <Button
                      onClick={() => {
                        dispatch(
                          deleteComment({
                            id: singlePostData?._id,
                            commentId: item?._id,
                            token: social_media_token,
                          })
                        );
                      }}
                    >
                      delete
                    </Button>,
                  ]}
                >
                  <div className="common-flex">
                    <div>
                      <Avatar src={item?.img} />
                    </div>
                    <div className="common-flex-col gap-med">
                      <div className="common-flex-col">
                        <span className="comment-name">
                          {item?.firstName} {item?.lastName}{" "}
                          <span className="op-sm font-sm">
                            {item?.username}
                          </span>{" "}
                        </span>
                        <span className="op-sm ">
                          replying to{" "}
                          <span className="text-primary">
                            {singlePostData?.username}
                          </span>
                        </span>
                      </div>

                      <div
                        contentEditable={isCommentEditable}
                        onInput={(e: any) =>
                          setEditComment(e.currentTarget.textContent)
                        }
                      >
                        {item?.text}
                      </div>

                      <div>
                        {isCommentEditable ? (
                          <div className="common-flex">
                            <Button
                              type="primary"
                              onClick={() => {
                                dispatch(
                                  editUserComment({
                                    id: singlePostData._id,
                                    commentId: item._id,
                                    token: social_media_token,
                                    commentData: editComment,
                                  })
                                );
                                setIsCommentEditable(false);
                              }}
                            >
                              Update
                            </Button>
                            <Button onClick={() => setIsCommentEditable(false)}>
                              Discard
                            </Button>{" "}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </List.Item>
              );
            }}
          />
        </div>
      </div>
      <FollowDetails />
    </div>
  );
};

export default SinglePost;
