import styled from "@emotion/styled";
import * as myIcons from "../Icons/MyIcons";
import { LogoIcon } from "../Icons/MyIcons";
import { ContainerFlex, ContainerGrid } from "../Containers/Containers";
import OptionNav from "./components/OptionNav";

export default function NavBar() {
  const opsNavBar = {
    home: {
      name: "home",
      icon: <myIcons.HomeIcon />,
    },
    search: {
      name: "search",
      icon: <myIcons.SearchIcon />,
    },
    explore: {
      name: "explore",
      icon: <myIcons.ExploreIcon />,
    },
    reels: {
      name: "reels",
      icon: <myIcons.MessengerIcon />,
    },
    notification: {
      name: "notification",
      icon: <myIcons.NotificationIcon />,
    },
    create: {
      name: "create",
      icon: <myIcons.NewPostIcon />,
    },
  };

  console.log(Object.keys(opsNavBar));

  return (
    <ContainerGrid
      templateRow="auto 1fr auto"
      moreStyle="min-height: 100vh;padding: 1rem 0.5rem; "
    >
      <ContainerFlex pd="2rem 0.5rem">
        <LogoIcon />
      </ContainerFlex>
      <ContainerFlex direction="column" gap="0.5rem">
        {Object.keys(opsNavBar).map((op, id) => (
          <OptionNav key={id} label={opsNavBar[op].name}>
            {opsNavBar[op].icon}
          </OptionNav>
        ))}
      </ContainerFlex>
      <div></div>
    </ContainerGrid>
  );
}
