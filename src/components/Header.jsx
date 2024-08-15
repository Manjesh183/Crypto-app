import React from 'react'
import {Button,HStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <HStack p={"4"}  shadow={"base"} color={"white"} bgColor={"black"}>
        <Button variant={"unstyled"} color={"white"}><Link to="/"></Link> Home</Button>
        

        <Button variant={"unstyled"} color={"white"}><Link to="/exchanges"></Link> Exchanges</Button>

        <Button variant={"unstyled"} color={"white"}><Link to="/coins"></Link> Coins</Button>
    </HStack>
    </>
  )
}

export default Header