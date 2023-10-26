import * as myIcons from "../../assets/imgs/Icons";
import OptionNav from "./components/OptionNav";

export default function NavBar() {
  return (
    <div>
      <div>
        <myIcons.HomeIcon width={48} height={48} active={true} />
        <myIcons.HomeIcon width={48} height={48} active={false} />
        <myIcons.SearchIcon width={24} height={24} active={true} />
        <myIcons.SearchIcon width={24} height={24} active={false} />

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
      <div>
        <OptionNav />
      </div>
    </div>
  );
}
