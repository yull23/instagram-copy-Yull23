import linksImgs from "../../Data/data-img-cloudinary";
import { usersFollow } from "../../Data/data-user-follow";
import Post from "./components/Post";

export default function PanelPost() {
  const userTest = linksImgs[0];
  const user = usersFollow["user7"];
  console.log(user);
  return (
    <div>
      <Post
        photoPost={userTest}
        username={user.username}
        linkPhoto={user.linkPhoto}
      />
    </div>
  );
}
