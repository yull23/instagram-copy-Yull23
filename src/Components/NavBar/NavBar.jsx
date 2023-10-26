import OptionNav from "./components/OptionNav";
import { GoHomeFill } from "react-icons/go";
import { BiMoviePlay, BiSearch } from "react-icons/bi";
import { ImCompass2 } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import * as myIcons from "../../assets/imgs/Icons";

export default function NavBar() {
  return (
    <div>
      <div>
        {/* <myIcons.SearchIcon alt="img" active={true} />
        <myIcons.ExploreIcon alt="img" active={false} />
        <myIcons.ReelIcon alt="img" active={false} /> */}
        <myIcons.HomeIcon width={24} height={24} active={true} />
        <myIcons.HomeIcon width={24} height={24} active={false} />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          corporis reiciendis sint necessitatibus tempore alias quia aspernatur
          aut amet, aliquam ipsam molestiae reprehenderit culpa pariatur laborum
          ducimus minus eius labore!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo autem
          eos explicabo nobis aliquid at dolorem, numquam, obcaecati doloribus
          eligendi, molestias quo impedit assumenda omnis maxime? Quisquam autem
          sit veritatis!
        </p>
      </div>
    </div>
  );
}
