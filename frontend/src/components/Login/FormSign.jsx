/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from "react";
import { Box, Stack, Input, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import ApiHelper from "../../services/apiHelper";

const inputs = [
  {
    placeholder: "Email",
    name: "email",
  },
];

export default function FormSign() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiHelper("login", "POST", dataLogin).then(() => {
      navigate("/");
      window.location.reload();
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box as={"form"} mt={10} px={3}>
      <Stack spacing={4}>
        {inputs.map((input) => (
          <Input
            className="bg-gray-100 pl-2 border border-gray-400 rounded-sm shadow-md"
            key={input.name}
            name={input.name}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        ))}
        <div className="flex relative justify-between">
          <Input
            placeholder="Mot de passe"
            name="password"
            onChange={handleChange}
            className="bg-gray-100 w-full pl-2 border border-gray-400 rounded-sm shadow-md"
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            variant={"ghost"}
            className="absolute right-3 top-2 z-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </button>
        </div>
      </Stack>
      <Button
        onClick={handleSubmit}
        className="mt-8 w-full bg-white hover:bg-black hover:text-white rounded-sm font-bold shadow-xl "
      >
        Se Connecter
      </Button>
      <Button className="mt-4 w-full bg-red-500 hover:bg-red-300 font-bold rounded-sm shadow-md">
        S'inscrire
      </Button>
    </Box>
  );
}
