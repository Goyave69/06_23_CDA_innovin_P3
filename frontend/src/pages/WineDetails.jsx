import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import ApiHelper from "../services/apiHelper";
import DescriptionDetails from "../components/WineDetails/DescriptionDetails";
import BuyDetails from "../components/WineDetails/BuyDetails";
import DescriptifDetails from "../components/WineDetails/DescriptifDetails";

const { VITE_BACKEND_URL } = import.meta.env;

export default function WineDetails() {
  const { id } = useParams();
  const toast = useToast();

  const [wineDetail, setWineDetail] = useState({});
  useEffect(() => {
    ApiHelper(`wines/${id}`, "get").then((res) => {
      setWineDetail(res.data);
    });
  }, []);

  const quantity = [...Array(31).keys()];

  const [quantitiesSelected, setQuantitiesSelected] = useState(1);

  const priceMultiple = (wineDetail.price * quantitiesSelected).toFixed(2);

  const toastSuccess = () => {
    toast({
      title: `${quantitiesSelected} bouteille(s) de ${wineDetail.name} ont été ajoutées à votre panier.`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const handleCart = () => {
    let cart = null;
    ApiHelper("carts", "get").then(async (res) => {
      if (res.data.length === 0) {
        const { data } = await ApiHelper("carts", "post", {
          is_order: false,
        });
        [cart] = data;
      } else {
        [cart] = res.data;
      }
      const duplicateItem = cart.content.find(
        (wine) => wine.wine_id === parseInt(id, 10)
      );
      if (duplicateItem) {
        ApiHelper(`cartwines/${duplicateItem.cart_wine_id}`, "put", {
          quantity: duplicateItem.quantity + parseInt(quantitiesSelected, 10),
        }).then(() => {
          toastSuccess();
        });
      } else {
        ApiHelper("cartwines", "post", {
          cart_id: cart.id,
          wine_id: wineDetail.id,
          quantity: parseInt(quantitiesSelected, 10),
        }).then(() => {
          toastSuccess();
        });
      }
    });
  };
  return (
    <div className="pt-4 px-4 md:px-0">
      <div className="md:flex mb-10">
        <img
          className="md:h-[70vh] md:max-w-[30vw] h-[30vh] m-4 rounded-xl mx-auto "
          src={`${VITE_BACKEND_URL}/uploads/${wineDetail.image}`}
          alt=""
        />
        <DescriptionDetails wineDetail={wineDetail} />
        <BuyDetails
          wineDetail={wineDetail}
          setQuantitiesSelected={setQuantitiesSelected}
          priceMultiple={priceMultiple}
          quantity={quantity}
          handleCart={handleCart}
        />
      </div>
      <hr />
      <DescriptifDetails wineDetail={wineDetail} />
    </div>
  );
}
