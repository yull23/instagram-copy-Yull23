import Aside from "../../Components/Aside/Aside";
import { ContainerFlex } from "../../Components/Containers/Containers";

export default function ContentPage() {
  return (
    <ContainerFlex gap="4rem" justify="center" maxWidth="64rem">
      <Aside />
      <Aside />
    </ContainerFlex>
  );
}
