import { Agency } from '../../components/Agency/Agency';
import { Analysis } from '../../components/Analysis/Analysis';
import { CaseStudies } from '../../components/CaseStudies/CaseStudies';
import { Certificate } from '../../components/Certificate/Certificate';
import { Header } from '../../components/Header/Header';
import { Question } from '../../components/Question/Question';
import { Ratings } from '../../components/Ratings/Ratings';
import { ServicesSection } from '../../components/ServicesSection/ServicesSection';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Certificate />
      <Agency />
      <Ratings />
      <ServicesSection />
      <Analysis />
      <Question />
      <CaseStudies />
    </div>
  );
};
