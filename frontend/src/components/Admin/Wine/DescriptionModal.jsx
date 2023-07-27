import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

export default function DescriptionModal({
  isOpen,
  onClose,
  setLoadingWines,
  wineId,
}) {
  const [dataWine, setDataWine] = useState({
    name: "",
    year: null,
    wine_type: "",
    origin_country: "",
    region: "",
    grape_variety: "",
    description: "",
    best_seller: false,
    image: "",
    price: null,
  });

  useEffect(() => {
    ApiHelper(`wines/${wineId}`, "get", dataWine).then((res) => {
      setDataWine(res.data);
    });
  }, []);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "best_seller":
        setDataWine((prev) => ({
          ...prev,
          [e.target.name]: e.target.checked,
        }));
        break;
      default:
        setDataWine((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    const formData = new FormData();

    formData.append("wine", dataWine);
    formData.append("picture", dataWine.image);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formData,
    };
    fetch(`http://localhost:5000/wines/${wineId}`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        setLoadingWines((prev) => !prev);
      })
      .catch(console.error);
  };

  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Description du vin</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <FormControl mt="4">
            <FormLabel>Description</FormLabel>
            <Textarea
              value={dataWine.description}
              name="description"
              placeholder="Vif et frais, un peu pointu et pourtant plein de rondeur, le vin Viré-Clessé offre une ..."
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr="3" onClick={onSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

DescriptionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoadingWines: PropTypes.func.isRequired,
  wineId: PropTypes.number.isRequired,
};
