
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorCoin from "../ErrorCoin";
import CoinCard from "./CoinCard";




const Coins = () => {
  
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");

  
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get( `${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(coins);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  // Ensure error handling is checked before loading
  if (error) return <ErrorCoin message={"Error While Fetching Coins"}  />;

  return (
    <div>Coins</div>
  )
}

export default Coins

