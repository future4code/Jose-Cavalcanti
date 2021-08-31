import React from "react"
import axios from "axios"
import useInput from "../../hooks/useInput"
import { useHistory } from "react-router-dom"
import { Flex, Button, Heading, Imput, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { baseURL } from "../../constants/baseURL"
import { goToAdminHome } from "../../route/Coordinates/Coordinates"


const LoginPage = () => {
    const { toggleColorMode } = useColorMode()
    const { formBackGround } = useColorModeValue("gray.100", "gray.700")
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const history = useHistory();
    

    const loginAdmin = () => {
        const URL = `${baseURL}/login`
        const body = { email, password };

        axios.post(URL, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                goToAdminHome(history)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <Flex height="100vh" alighItems="center" justifyContent="center">
            <Flex direction="column" background={formBackGround} p={12} rounded={6}>
                <Heading mb={6}>LogIn Page</Heading>
                <Imput value={email} onChange={setEmail} placeholder="exemplo@exemplo.com" variant="filled" mb={3} type="email" />
                <Imput value={password} onChange={setPassword} placeholder="*******" variant="filled" mb={5} type="password" />
                <Button colorScheme="teal">Log In</Button>
            </Flex>
        </Flex>

    )
}

export default LoginPage