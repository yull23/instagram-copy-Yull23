import Aside from "../../Components/Aside/Aside";
import { ContainerFlex } from "../../Components/Containers/Containers";
import PanelPost from "../../Components/PanelPost/PanelPost";

export default function ContentPage() {
  return (
    <ContainerFlex gap="4rem" justify="center" maxWidth="64rem" moreStyle="">
      <PanelPost />
      <Aside />
    </ContainerFlex>
  );
}
