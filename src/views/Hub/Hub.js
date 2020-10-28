import React, { useState } from 'react';
import { Button, Box, Flex, Text, Grid } from '@chakra-ui/core';

import { useTheme, useUser } from '../../contexts/PokemolContext';
import BrandOverride from '../../assets/themes/raidTheme/raidguild__avatar--pink.jpg';
import { HUB_MEMBERSHIPS } from '../../utils/apollo/hub-queries';
import GraphFetch from '../../components/Shared/GraphFetch';
import MemberDaoList from '../../components/Hub/MemberDaoList';
import HubSignedOut from '../../components/Hub/HubSignedOut';
import HubProfileCard from '../../components/Hub/HubProfileCard';
import HubActivityFeed from '../../components/Hub/HubActivityFeed';

const Hub = () => {
  const [, setTheme] = useTheme();
  const [user] = useUser();
  const [memberDaos, setMemberDaos] = useState();

  const setLocalTheme = () => {
    setTheme({
      brand50: '#ff4d74',
      brand100: '#ff4d74',
      brand200: '#ff4d74',
      brand300: '#ff4d74',
      brand400: '#fe1d5b',
      brand500: '#e50651',
      brand600: '#e50651',
      brand700: '#e50651',
      brand800: '#e50651',
      brand900: '#e50651',
      brandImg: BrandOverride,
      bg400: '#000',
    });
  };

  const setDefault = () => {
    // clearTheme();
    setTheme();
  };

  return (
    <Box p={6}>
      <Flex w='100%'>
        <Button onClick={setLocalTheme}> PRETEND DAO BUTTON</Button>
        <Button onClick={setDefault}> DEFAULT</Button>
      </Flex>

      {user ? (
        <>
          <Grid gap={6} templateColumns='repeat(2, 1fr)'>
            <Box
              rounded='lg'
              bg='blackAlpha.600'
              borderWidth='1px'
              borderColor='whiteAlpha.200'
              p={6}
              mt={6}
              w='100%'
            >
              <HubProfileCard />

              {memberDaos ? (
                <MemberDaoList
                  daos={memberDaos.members.map((member) => member.moloch)}
                />
              ) : null}
            </Box>

            <Box>
              <Text fontSize='xl' ml={6}>
                Recent Activity
              </Text>
              {memberDaos ? (
                <HubActivityFeed
                  daos={memberDaos.members.map((member) => member.moloch)}
                />
              ) : null}
            </Box>
          </Grid>

          <GraphFetch
            query={HUB_MEMBERSHIPS}
            setRecords={setMemberDaos}
            entity='members'
            variables={{ memberAddress: user.username }}
          />
        </>
      ) : (
        <HubSignedOut />
      )}
    </Box>
  );
};

export default Hub;