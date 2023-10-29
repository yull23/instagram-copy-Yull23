import linksImgs from "../../Data/data-img-cloudinary";
import Post from "./components/Post";

export default function PanelPost() {
  const userTest = linksImgs[0];
  return (
    <div>
      <Post photoPost={userTest} />
    </div>
  );
}
