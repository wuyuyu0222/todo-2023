import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { globalLoadingAtom } from '../states/atom';
import PageContainer from '../components/PageContainer';

const List: FC = () => {
  const isGlobalLoading = useRecoilValue(globalLoadingAtom);
  return <PageContainer>{!isGlobalLoading && <div>list</div>}</PageContainer>;
};

export default List;
