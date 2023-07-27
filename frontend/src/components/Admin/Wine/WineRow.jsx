/* eslint-disable */
import { useState, useRef } from "react";
import {
  Input,
  Tr,
  Td,
  Icon,
  HStack,
  Checkbox,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiCheckSquare, FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";
import stringHelper from "../../../services/stringHelper";
import WinePropTypes from "./WinePropTypes";
import DescriptionModal from "./DescriptionModal";

export default function WineRow({ wine, setLoadingWines }) {
  const {
    id,
    name,
    year,
    wine_type,
    origin_country,
    region,
    grape_variety,
    description,
    best_seller,
    image,
    price,
  } = wine;
  const [isEditable, setEditable] = useState(false);
  const [dataWine, setDataWine] = useState({
    name,
    year,
    wine_type,
    origin_country,
    region,
    grape_variety,
    description,
    best_seller: best_seller === 1,
    image,
    price,
  });

  const inputRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    const wineData = JSON.stringify(dataWine);
    const formData = new FormData();

    formData.append("wine", wineData);
    formData.append("picture", inputRef.current.files[0]);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formData,
    };
    fetch(`http://localhost:5000/wines/${id}`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        setLoadingWines((prev) => !prev);
        setEditable(false);
      })
      .catch(console.error);
  };

  const handleDelete = () => {
    ApiHelper(`wines/${id}`, "delete", {}, "")
      .then(() => {
        setLoadingWines((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>
        {isEditable ? (
          <Input value={dataWine.name} name="name" onChange={handleChange} />
        ) : (
          name
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataWine.year} name="year" onChange={handleChange} />
        ) : (
          year
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataWine.wine_type}
            name="wine_type"
            onChange={handleChange}
          />
        ) : (
          wine_type
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataWine.origin_country}
            name="origin_country"
            onChange={handleChange}
          />
        ) : (
          origin_country
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataWine.region}
            name="region"
            onChange={handleChange}
          />
        ) : (
          region
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataWine.grape_variety}
            name="grape_variety"
            onChange={handleChange}
          />
        ) : (
          grape_variety
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Button onClick={onOpen} colorScheme="blue">
            Editer
          </Button>
        ) : (
          stringHelper.stringLimiter(description, 45)
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Checkbox
            size="lg"
            isChecked={dataWine.best_seller}
            name="best_seller"
            onChange={handleChange}
          />
        ) : (
          best_seller
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            ref={inputRef}
            type="file"
            name="image"
            onChange={handleChange}
          />
        ) : (
          image
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataWine.price} name="price" onChange={handleChange} />
        ) : (
          price
        )}
      </Td>
      <Td>
        <HStack spacing={6}>
          {isEditable ? (
            <Icon onClick={onSubmit} as={FiCheckSquare} />
          ) : (
            <Icon onClick={() => setEditable(true)} as={FiEdit} />
          )}
          <Icon onClick={() => handleDelete()} as={FiDelete} />
        </HStack>
      </Td>
      <DescriptionModal
        isOpen={isOpen}
        onClose={onClose}
        setLoadingWines={setLoadingWines}
        wineId={id}
      />
    </Tr>
  );
}

WineRow.propTypes = {
  wine: PropTypes.shape(WinePropTypes).isRequired,
  setLoadingWines: PropTypes.func.isRequired,
};
