import { Address } from '../../types';

export type PoolState = {
  // TODO: poolState is the state of event
  // subscriber. This should be the minimum
  // set of parameters required to compute
  // pool prices. Complete me!
};

export type LemmaswapData = {
  // TODO: LemmaswapData is the dex data that is
  // returned by the API that can be used for
  // tx building. The data structure should be minimal.
  // Complete me!
};

export type DexParams = {
  // TODO: DexParams is set of parameters the can
  // be used to initiate a DEX fork.
  // Complete me!
  // lemmaswap: Address;
  poolGasCost: number;
};
