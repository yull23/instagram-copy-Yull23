import linksImgs from "../../Data/data-img-cloudinary";
import { usersFollow } from "../../Data/data-user-follow";
import Post from "./components/Post";

export default function PanelPost() {
  const userTest = linksImgs;
  const users = Object.keys(usersFollow);
  console.log(users);
  return (
    <div>
      {linksImgs.map((linkImg, id) => (
        <Post
          key={id}
          photoPost={linkImg}
          username={usersFollow[users[id]].username}
          linkPhoto={usersFollow[users[id]].linkPhoto}
        />
      ))}
      {/* <Post
        photoPost={userTest}
        username={user.username}
        linkPhoto={user.linkPhoto}
      /> */}
    </div>
  );
}
