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
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import ApiHelper from "../../../services/apiHelper";

export default function UserModal({ isOpen, onClose, setLoadingUsers }) {
  const [dataUser, setDataUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    role: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setDataUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    ApiHelper("users", "post", dataUser)
      .then(() => {
        setLoadingUsers((prev) => !prev);
        setDataUser({});
        onClose();
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Créer un utilisateur</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="6">
          <HStack spacing={4} mt="2">
            <FormControl>
              <FormLabel>Prénom</FormLabel>
              <Input
                value={dataUser.firstname}
                name="firstname"
                placeholder="John"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Nom</FormLabel>
              <Input
                value={dataUser.lastname}
                name="lastname"
                placeholder="Doe"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <HStack spacing={4} mt="2">
            <FormControl mt="4">
              <FormLabel>Pseudo</FormLabel>
              <Input
                value={dataUser.username}
                name="username"
                placeholder="DoeJo"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Rôle</FormLabel>
              <Select name="role" onChange={handleChange}>
                <option value="user">Utilisateur</option>
                <option value="admin">Administrateur</option>
              </Select>
            </FormControl>
          </HStack>

          <FormControl mt="4">
            <FormLabel>E-mail</FormLabel>
            <Input
              value={dataUser.email}
              name="email"
              placeholder="j.doe@mail.com"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Mot de passe</FormLabel>
            <InputGroup>
              <Input
                value={dataUser.password}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="?nA80cqWm8r0"
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Adresse</FormLabel>
            <Input
              value={dataUser.address}
              name="address"
              placeholder="123 street"
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Téléphone</FormLabel>
            <Input
              value={dataUser.phone}
              name="phone"
              placeholder="0123456789"
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

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoadingUsers: PropTypes.func.isRequired,
};
