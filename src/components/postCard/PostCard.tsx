import { Avatar, Card, Modal } from "antd";
import React, { useState } from "react";
import {
  HeartFilled,
  HeartOutlined,
  CommentOutlined,
  SaveFilled,
  SaveOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Input } from "antd";
import CreatePost from "./CreatePost";
import { useDispatch } from "react-redux";
import { editUserPost } from "../../features/post/helpers/editPost";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteUserPost } from "../../features/post/helpers/deleteUserPost";
import { getAllPosts } from "../../features/post/helpers/getAllPost";
import { likeUserPost } from "../../features/post/helpers/likeUserPost";
import { dislikePost } from "../../features/post/helpers/dislikePost";
import { bookMarkPost } from "../../features/bookmark/helpers/bookMarkPost";
import { removeBookMarkedPost } from "../../features/bookmark/helpers/removeBookMarkPost";
// {
//     "_id": "2a2224ea-eab3-4fcc-ae91-abc3aaff6e0c",
//     "content": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     "likes": {
//         "likeCount": 0,
//         "likedBy": [],
//         "dislikedBy": []
//     },
//     "username": "adarshbalika",
//     "createdAt": "2023-05-23T13:50:58+05:30",
//     "updatedAt": "2023-05-23T13:50:58+05:30",
//     "comments": [
//         {
//             "_id": "978a7393-7ea2-488f-98f5-174746762cd2",
//             "username": "shubhamsoni",
//             "text": "Interesting",
//             "votes": {
//                 "upvotedBy": [],
//                 "downvotedBy": []
//             }
//         },
//         {
//             "_id": "59e9678e-b36c-4b78-a73f-16c15eeedba4",
//             "username": "sohamshah",
//             "text": "Wow!",
//             "votes": {
//                 "upvotedBy": [],
//                 "downvotedBy": []
//             }
//         }
//     ],
//     "id": "1"
// }
export type cardDatatype = {
  _id: string;
  content: string;
  likes: {
    likeCount: number;
    likedBy: any;
    dislikedBy: any;
  };
  username: string;
  createdAt: string;
  updatedAt: string;
  comments: [
    {
      _id: string;
      username: string;
      text: string;
      votes: {
        upvotedBy: any;
        downvotedBy: any;
      };
    },
    {
      _id: string;
      username: string;
      text: string;
      votes: {
        upvotedBy: any;
        downvotedBy: any;
      };
    }
  ];
  id: string;
};

const PostCard = ({ data }: any) => {
  const { Meta } = Card;
  const { TextArea } = Input;

  const { content, username, likes } = data;

  console.log(data,"dataaa");
  
  const dispatch = useAppDispatch();
  const { social_media_token, authUserData } = useAppSelector(
    (store) => store.auth
  );
  const { allBookMarks } = useAppSelector((store) => store.bookmark);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postContent, setPostContent] = useState(content);

  const editPostHandler = () => {
    setIsEditModalOpen(true);
  };

  const handelUpdatePosts = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };
  const handleCancelEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleOk = () => {
    setIsEditModalOpen(false);
    dispatch(
      editUserPost({
        post: postContent,
        token: social_media_token,
        id: data?._id,
      })
    );
    dispatch(getAllPosts());
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Edit",
      onClick: () => {
        editPostHandler();
      },
    },
    {
      key: "2",
      label: "Delete",
      onClick: () => {
        dispatch(
          deleteUserPost({ token: social_media_token, postId: data?._id })
        );
        dispatch(getAllPosts());
      },
    },
  ];

  const isLiked = "";
  const isBookMarked = allBookMarks?.find((post:any) => post?._id === data?._id);
  console.log(allBookMarks, "card");
  console.log(isBookMarked,"auht");
  
  return (
    <div className="mr-sm">
      <Card
        style={{ width: 450, textAlign: "left" }}
        actions={[
          <div className="common-flex js-around">
            {" "}
            <div>
              {likes?.likedBy?.find(
                (user: any) => user._id === authUserData._id
              ) ? (
                <HeartFilled
                  style={{ color: "#9254de" }}
                  onClick={() => {
                    dispatch(
                      dislikePost({
                        token: social_media_token,
                        postId: data._id,
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
                        token: social_media_token,
                        postId: data._id,
                      })
                    );
                    dispatch(getAllPosts());
                  }}
                />
              )}
              {likes?.likeCount >= 1 ? likes.likeCount : ""}
            </div>
            <CommentOutlined style={{ color: "#9254de" }} />
            {isBookMarked ? (
              <SaveFilled
                style={{ color: "#9254de" }}
                onClick={() => {
                  dispatch(
                    removeBookMarkedPost({
                      postId: data?._id,
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
                      postId: data?._id,
                      token: social_media_token,
                    })
                  );
                }}
              />
            )}
          </div>,
        ]}
      >
        <div>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title={username}
            description={content}
          />
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Button>:</Button>
            </Dropdown>
          </Space>
        </div>

        {data?.img ? (
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        ) : (
          ""
        )}

        {isEditModalOpen ? (
          <Modal
            title="Basic Modal"
            centered
            open={isEditModalOpen}
            onOk={handleOk}
            onCancel={handleCancelEditModal}
          >
            <TextArea
              showCount
              maxLength={100}
              onChange={handelUpdatePosts}
              placeholder="What's Happening"
              defaultValue={content}
            />
          </Modal>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default PostCard;
