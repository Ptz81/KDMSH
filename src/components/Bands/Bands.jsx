import { getBands } from "../../../api";
// import { MainSection } from "../pages/Home.styled";
import { BandList } from "./BandList";

export const Bands = () => {
  const bands = getBands();
  return (
    // <MainSection>
      <BandList bands={bands} />
    // </MainSection>
  );
};

