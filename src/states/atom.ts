// eslint-disable-next-line import/named
import { RecoilState, atom } from 'recoil';

export const userAtom: RecoilState<any> = atom({
  key: 'user',
  default: undefined,
});
export const globalLoadingAtom: RecoilState<boolean> = atom({
  key: 'globalLoading',
  default: true,
});
