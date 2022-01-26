import { CONTRACTS } from './contracts';
import { ACTIONS } from './onTxHashActions';
import { DETAILS } from './details';

export const MINION_TX = {
  SUMMON_MINION_VANILLA: {
    contract: CONTRACTS.VANILLA_MINION_FACTORY,
    name: 'summonMinion',
    poll: 'subgraph',
    display: 'Summoning Minion',
    errMsg: 'Error Summoning Minion',
    successMsg: 'Minion Summoned!',
    gatherArgs: ['.contextData.daoid', '.values.minionName'],
  },
  PAYROLL: {
    contract: CONTRACTS.SELECTED_MINION,
    name: 'proposeAction',
    poll: 'subgraph',
    onTxHash: ACTIONS.PROPOSAL,
    display: 'Sending Token',
    errMsg: 'Error Submitting Proposal',
    successMsg: 'Proposal Submitted!',
    gatherArgs: [
      '.values.minionToken',
      0,
      {
        type: 'encodeHex',
        contract: CONTRACTS.ERC_20,
        fnName: 'transfer',
        gatherArgs: ['.values.applicant', '.values.minionPayment'],
      },
      {
        type: 'detailsToJSON',
        gatherFields: DETAILS.PAYROLL_PROPOSAL,
      },
    ],
  },
  MINION_WITHDRAW: {
    contract: CONTRACTS.LOCAL_VANILLA_MINION,
    name: 'crossWithdraw',
    poll: 'subgraph',
    onTxHash: ACTIONS.GENERIC_MODAL,
    display: 'Transfer Balance',
    errMsg: 'Error Transferring Balance',
    successMsg: 'Balance Transferred!',
  },
  MINION_CANCEL: {
    contract: CONTRACTS.LOCAL_VANILLA_MINION,
    name: 'cancelAction',
    poll: 'subgraph',
    onTxHash: ACTIONS.BASIC,
    display: 'Cancel Minion',
    errMsg: 'Error Cancelling Minion',
    successMsg: 'Cancelled Minion!',
  },
  MINION_SELL_NIFTY: {
    contract: CONTRACTS.LOCAL_VANILLA_MINION,
    name: 'proposeAction',
    poll: 'subgraph',
    onTxHash: ACTIONS.GENERIC_MODAL,
    display: 'Sell Nifty',
    errMsg: 'Error Submitting Proposal',
    successMsg: 'Proposal Submitted!',
    gatherArgs: [
      '.localValues.contractAddress',
      0,
      {
        type: 'encodeHex',
        contract: CONTRACTS.NIFTY_INK,
        fnName: 'setTokenPrice',
        gatherArgs: ['.localValues.tokenId', '.values.price'],
      },
      {
        type: 'detailsToJSON',
        gatherFields: DETAILS.MINION_SELL_NIFTY,
      },
    ],
  },
  MINION_SIMPLE_EXECUTE: {
    contract: CONTRACTS.MINION_SIMPLE_EXECUTE,
    name: 'executeAction',
    poll: 'subgraph',
    specialPoll: 'executeAction',
    onTxHash: ACTIONS.GENERIC_MODAL,
    display: 'Executing Minion Proposal',
    errMsg: 'Error Executing Minion Proposal',
    successMsg: 'Minion Proposal Executed!',
  },
  MINION_SAFE_EXECUTE: {
    contract: CONTRACTS.MINION_SAFE_EXECUTE,
    name: 'executeAction',
    poll: 'subgraph',
    onTxHash: ACTIONS.GENERIC_MODAL,
    display: 'Executing Minion Proposal',
    errMsg: 'Error Executing Minion Proposal',
    successMsg: 'Minion Proposal Executed!',
  },
};
