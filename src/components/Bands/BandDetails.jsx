import { useParams } from "react-router-dom";
import { getBandById } from "../../../api";
import { Image } from "../pages/Home.styled";

export const BandDetails = () => {
  const { id } = useParams();
  const band = getBandById(id);
  return (
    <main>
      <Image src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Band - {band.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
