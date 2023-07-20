import { useState } from "react";
import { Input, Tr, Td, Icon, HStack, Checkbox } from "@chakra-ui/react";
import { FiEdit, FiCheckSquare, FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";
import WinePropTypes from "./WinePropTypes";

export default function WineRow({ wine, setLoadingWines }) {
  const {
    id,
    name,
    year,
    wineType,
    originCountry,
    region,
    grapeVariety,
    description,
    bestSeller,
    image,
    price,
  } = wine;
  const [isEditable, setEditable] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataWine, setDataWine] = useState({
    name,
    year,
    wine_type: wineType,
    origin_country: originCountry,
    region,
    grape_variety: grapeVariety,
    description,
    best_seller: bestSeller === 1,
    image: selectedImage,
    price,
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "image":
        setSelectedImage(e.target.files[0]);
        break;
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

    if (dataWine.image) {
      const myHeaders = new Headers();
      const wineData = JSON.stringify(dataWine);
      const formData = new FormData();

      formData.append("wine", wineData);
      if (selectedImage) {
        formData.append("picture", selectedImage);
      } else {
        formData.append("picture", wineData.image);
      }

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
    }
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
          dataWine.name
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataWine.year} name="year" onChange={handleChange} />
        ) : (
          dataWine.year
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
          dataWine.wine_type
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
          dataWine.origin_country
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
          dataWine.region
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
          dataWine.grape_variety
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataWine.description}
            name="description"
            onChange={handleChange}
          />
        ) : (
          dataWine.description
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
          dataWine.best_seller
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input type="file" name="image" onChange={handleChange} />
        ) : (
          image
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataWine.price} name="price" onChange={handleChange} />
        ) : (
          dataWine.price
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
    </Tr>
  );
}

WineRow.propTypes = {
  wine: PropTypes.shape(WinePropTypes).isRequired,
  setLoadingWines: PropTypes.func.isRequired,
};
