import { useEffect, useState } from "react";
import Header from "../../components/title";
import {Box, Button, Heading, Flex, Grid, GridItem} from "@chakra-ui/react"
import User from "../../components/user";

const Home = () => {
  const [users, setUsers] = useState ([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()
    .then((data) => setUsers(data)));
  }, []);

  return (
    <>
      <Flex>

      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {users.map((user) => (
            <User user={user} />
          ))}
        <GridItem W="100%" h="10" bg="blue.500" />
        </Grid>        
    </>
  );
};

export default Home;