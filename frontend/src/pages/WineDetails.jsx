import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ApiHelper from "../services/apiHelper";
import ImgDetails from "../components/WineDetails/ImgDetails";
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

  const Quantity = [...Array(31).keys()];

  const [QuantitiesSelected, setQuantitiesSelected] = useState(1);

  const priceMultiple = wineDetail.price * QuantitiesSelected;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingTop: "2%",
        boxShadow: "12px 1px 2px 1px black",
      }}
    >
      <Box sx={{ display: "flex", marginBottom: "5vh" }}>
        <ImgDetails wineDetail={wineDetail} />
        <DescriptionDetails wineDetail={wineDetail} />
        <BuyDetails
          setQuantitiesSelected={setQuantitiesSelected}
          wineDetail={wineDetail}
          priceMultiple={priceMultiple}
          Quantity={Quantity}
        />
      </Box>
      <hr />
      <DescriptifDetails wineDetail={wineDetail} />
    </Box>
  );
}
