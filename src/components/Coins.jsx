
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
import { Link } from "react-router-dom";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(coins);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [currency,page]);

  // Ensure error handling is checked before loading
  if (error) return <ErrorCoin  />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                key={i.market_cap_rank}
                name={i.name}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol}
               id={i.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const CoinCard = ({ id,name, img,price,symbol,currencySymbol="₹" }) => (
 <Link to={`${server}/coin/${id}`} target={"blank"}>
 <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {name}
      </Heading>

      <Text noOfLines={1}>{symbol}</Text>
      <Text noOfLines={1}>{price?`${currencySymbol}${price}`:"NA"}</Text>
      
    </VStack></Link>
    
  
);





export default Coins