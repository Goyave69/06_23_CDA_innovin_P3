import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function WineModal({ isOpen, onClose, setLoadingWines }) {
  const [dataWine, setDataWine] = useState({
    name: "",
    year: 1994,
    wine_type: "",
    origin_country: "",
    region: "",
    grape_variety: "",
    description: "",
    best_seller: false,
    image: "",
    price: 0,
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setDataWine((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked || e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (dataWine.image) {
      const myHeaders = new Headers();
      const wine = JSON.stringify(dataWine);
      const formData = new FormData();

      formData.append("wine", wine);
      formData.append("picture", inputRef.current.files[0]);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      fetch(`http://localhost:5000/wines`, requestOptions)
        .then((response) => response.text())
        .then(() => {
          setLoadingWines((prev) => !prev);
          setDataWine({});
          onClose();
        })
        .catch(console.error);
    }
  };

  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Créer un vin</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <HStack spacing={4} mt="2">
            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input
                value={dataWine.name}
                name="name"
                placeholder="Viré-Clessé"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Année</FormLabel>
              <Input
                value={dataWine.year}
                name="year"
                placeholder="1994"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack spacing={4} mt="2">
            <FormControl mt="4">
              <FormLabel>Type de vin</FormLabel>
              <Input
                value={dataWine.wine_type}
                name="wine_type"
                placeholder="Rouge"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Pays d'origine</FormLabel>
              <Input
                value={dataWine.origin_country}
                name="origin_country"
                placeholder="France"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack spacing={4} mt="2">
            <FormControl mt="4">
              <FormLabel>Region</FormLabel>
              <Input
                value={dataWine.region}
                name="region"
                placeholder="Bourgogne"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Variété de grape</FormLabel>
              <Input
                value={dataWine.grape_variety}
                name="grape_variety"
                placeholder="chardonnay"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <FormControl mt="4">
            <FormLabel>Description</FormLabel>
            <Input
              value={dataWine.description}
              name="description"
              placeholder="description du vin"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Prix</FormLabel>
            <Input
              value={dataWine.price}
              name="price"
              placeholder="9"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Image</FormLabel>
            <Input
              value={dataWine.image}
              ref={inputRef}
              type="file"
              name="image"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <Checkbox
              size="lg"
              isChecked={dataWine.best_seller}
              name="best_seller"
              onChange={handleChange}
            >
              Meilleure vente
            </Checkbox>
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

WineModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoadingWines: PropTypes.func.isRequired,
};
