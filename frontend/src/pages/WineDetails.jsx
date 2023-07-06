import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiHelper from "../services/apiHelper";
import DescriptionDetails from "../components/WineDetails/DescriptionDetails";
import BuyDetails from "../components/WineDetails/BuyDetails";
import DescriptifDetails from "../components/WineDetails/DescriptifDetails";

export default function WineDetails() {
  const { id } = useParams();

  const [wineDetail, setWineDetail] = useState({});
  useEffect(() => {
    ApiHelper(`wines/${id}`, "get").then((res) => {
      setWineDetail(res.data);
    });
  }, []);

  const quantity = [...Array(31).keys()];

  const user = JSON.parse(localStorage.getItem("user"));

  const [quantitiesSelected, setQuantitiesSelected] = useState(1);

  const priceMultiple = wineDetail.price * quantitiesSelected;

  return (
    <div className="pt-4 px-4 md:px-0">
      <div className="md:flex mb-10">
        <img
          className="md:h-[70vh] h-[30vh] m-4 rounded-xl mx-auto md:mx-32"
          src={wineDetail.image}
          alt=""
        />
        <DescriptionDetails wineDetail={wineDetail} />
        <BuyDetails
          wineDetail={wineDetail}
          setQuantitiesSelected={setQuantitiesSelected}
          priceMultiple={priceMultiple}
          quantity={quantity}
          quantitiesSelected={quantitiesSelected}
          user={user}
        />
      </div>
      <hr />
      <DescriptifDetails wineDetail={wineDetail} />
    </div>
  );
}
