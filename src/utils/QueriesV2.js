import { gql } from 'apollo-boost';

export const GET_METADATA_V2 = gql`
query Metadata {
  currentPeriod @client
  totalShares @client
  guildBankAddr @client
  gracePeriodLength @client
  votingPeriodLength @client
  periodDuration @client
  processingReward @client
  proposalDeposit @client
  guildBankValue @client
  shareValue @client
  approvedToken @client
  tokenSymbol @client
}
`;

export const GET_MOLOCHES_V2 = gql`
  query daos($skip: Int) {
    daos(orderBy: count, first: 100, skip: $skip) {
      apiData @client
      id
      index
      count
      moloch
      summoner
      newContract
      version
      title
      tokenInfo @client
    }
    moloches(orderBy: summoningTime, first: 100, skip: $skip) {
      id
      totalShares
      summoningTime
      members {
        id
      }
    }
  }
`;
