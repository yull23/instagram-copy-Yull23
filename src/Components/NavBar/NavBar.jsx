import { AiOutlineGithub } from "react-icons/ai";
import * as myIcons from "../Icons/MyIcons";
import { LogoIcon } from "../Icons/MyIcons";
import { ContainerFlex, ContainerGrid } from "../Containers/Containers";
import OptionNav from "./components/OptionNav";
import { opsNavBar } from "../../Data/data-navbar";
import { linkUser } from "../../Data/data-user-follow";

export default function NavBar() {
  const moreStyles = `
    min-height: 100vh;
    padding: 1rem 0.5rem;
    border-right: 1px solid #343435;
    max-width: 17.25rem;

  `;

  return (
    <ContainerGrid templateRow="auto 1fr auto" moreStyle={moreStyles}>
      <ContainerFlex pd="1.5rem 0.5rem 2.10rem 0.5rem">
        <LogoIcon />
      </ContainerFlex>
      <ContainerFlex direction="column" gap="0.5rem">
        {Object.keys(opsNavBar).map((op, id) => (
          <OptionNav key={id} label={opsNavBar[op].name}>
            {opsNavBar[op].icon}
          </OptionNav>
        ))}
        <OptionNav label="profile">
          <img src={linkUser} alt="profile" />
        </OptionNav>
        <OptionNav label="gitHub">
          <AiOutlineGithub color="#fff" size="1.5rem" />
        </OptionNav>
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
