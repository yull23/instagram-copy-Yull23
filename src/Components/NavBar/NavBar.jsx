import { AiOutlineGithub } from "react-icons/ai";
import * as myIcons from "../Icons/MyIcons";
import { LogoIcon } from "../Icons/MyIcons";
import { ContainerFlex, ContainerGrid } from "../Containers/Containers";
import OptionNav from "./components/OptionNav";
import { opsNavBar } from "../../Data/data-navbar";
import { linkPhotoUser } from "../../Data/data-user-follow";
import { useState } from "react";

export default function NavBar() {
  const moreStyles = `
    position: fixed;
    

    min-height: 100vh;
    width: 24.5rem;
    padding: 0.5rem 0.75rem 1.25rem;
    border-right: 1px solid #343435;
    a{
    width: 100%;

    }
  `;
  const [statusActive, setStatusActive] = useState(0);

  const handleClick = (id) => {
    setStatusActive(id);
  };
  return (
    <ContainerGrid templateRow="auto 1fr auto" moreStyle={moreStyles}>
      <ContainerFlex pd="2rem 0.75rem 0.75rem " moreStyle="margin: 0 0 19px;">
        <LogoIcon />
      </ContainerFlex>
      <ContainerFlex direction="column" gap="0rem">
        {Object.keys(opsNavBar).map((op, id) => (
          <OptionNav
            key={id}
            label={opsNavBar[op].name}
            statusActive={statusActive}
            handleClick={handleClick}
            index={id}
          >
            {opsNavBar[op].icon}
          </OptionNav>
        ))}
        <a href="https://www.instagram.com/tzzair/" target="blank">
          <OptionNav label="profile">
            <img src={linkPhotoUser} alt="profile" />
          </OptionNav>
        </a>
        <a
          href="https://github.com/yull23/instagram-styles-yull23"
          target="blank"
        >
          <OptionNav label="gitHub">
            <AiOutlineGithub color="#fff" size="1.5rem" />
          </OptionNav>
        </a>
      </ContainerFlex>
      <ContainerFlex direction="column" gap="0.5rem">
        <OptionNav label={"threads"}>
          <myIcons.TheardsIcon />
        </OptionNav>
        <OptionNav label={"more"}>
          <myIcons.MoreIcon />
        </OptionNav>
      </ContainerFlex>
    </ContainerGrid>
  );
}
