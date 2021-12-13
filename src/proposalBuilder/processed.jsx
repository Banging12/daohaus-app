import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { AiOutlineCheck } from 'react-icons/ai';

import { ParaSm } from '../components/typography';
import {
  InactiveButton,
  PropActionBox,
  StatusCircle,
  StatusDisplayBox,
  UserVoteData,
  VotingInactive,
} from './actionPrimitives';

const Processed = props => {
  const { voteData } = props;

  return (
    <PropActionBox>
      <StatusDisplayBox>
        <StatusCircle color={voteData?.isPassing ? 'green' : 'red'} />
        <ParaSm fontWeight='700' mr='1'>
          {voteData?.isPassing ? 'Passed' : 'Failed'}
        </ParaSm>
        <ParaSm fontStyle='italic'>and processed</ParaSm>
      </StatusDisplayBox>
      <VotingInactive
        {...props}
        justifyContent='space-between'
        voteData={voteData}
      />
      <Flex mt='2' alignItems='center'>
        <UserVoteData voteData={voteData} />
        <Flex ml='auto'>
          <InactiveButton size='sm' mr='2' leftIcon={<AiOutlineCheck />}>
            Processed
          </InactiveButton>
          <Button size='sm'>Early Execute</Button>
        </Flex>
      </Flex>
    </PropActionBox>
  );
};
export default Processed;
