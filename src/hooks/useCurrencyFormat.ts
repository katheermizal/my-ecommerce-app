import { configs } from '../shared/config/config';

export const useCurrencyFormat = (value: any) => {
  const converttoNum = Number(value ?? 0.0);
  return configs.CURRENCY + converttoNum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
