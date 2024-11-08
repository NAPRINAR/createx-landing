import { Agency } from '../../components/Agency/Agency';
import { Certificate } from '../../components/Certificate/Certificate';
import { Header } from '../../components/Header/Header';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Certificate />
      <Agency />
    </div>
  );
};
