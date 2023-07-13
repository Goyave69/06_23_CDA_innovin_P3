import { useState } from "react";
import { Input, Tr, Td, Icon, HStack } from "@chakra-ui/react";
import { FiEdit, FiCheckSquare, FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";
import UserPropTypes from "./UserPropTypes";

export default function UserRow({ user, setLoadingUsers }) {
  const { id, firstname, lastname, username, role, email, address, phone } =
    user;
  const [isEditable, setEditable] = useState(false);
  const [dataUser, setDataUser] = useState({
    firstname,
    lastname,
    username,
    role,
    email,
    address,
    phone,
  });

  const handleChange = (e) => {
    setDataUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    ApiHelper(`users/${id}`, "put", dataUser)
      .then(() => {
        setLoadingUsers((prev) => !prev);
        setEditable(false);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  const handleDelete = () => {
    ApiHelper(`users/${id}`, "delete", {}, "")
      .then(() => {
        setLoadingUsers((prev) => !prev);
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
          <Input
            value={dataUser.firstname}
            name="firstname"
            onChange={handleChange}
          />
        ) : (
          firstname
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataUser.lastname}
            name="lastname"
            onChange={handleChange}
          />
        ) : (
          lastname
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataUser.username}
            name="username"
            onChange={handleChange}
          />
        ) : (
          username
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataUser.role} name="role" onChange={handleChange} />
        ) : (
          role
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataUser.email} name="email" onChange={handleChange} />
        ) : (
          email
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input
            value={dataUser.address}
            name="address"
            onChange={handleChange}
          />
        ) : (
          address
        )}
      </Td>
      <Td>
        {isEditable ? (
          <Input value={dataUser.phone} name="phone" onChange={handleChange} />
        ) : (
          phone
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

UserRow.propTypes = {
  user: PropTypes.shape(UserPropTypes).isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
