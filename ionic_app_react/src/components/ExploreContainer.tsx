import { ButtonBar } from './ButtonBar';
import './ExploreContainer.css';
import './SliderCard'
import SliderCard from './SliderCard';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <SliderCard></SliderCard>
      <ButtonBar></ButtonBar>
    </div>
  );
};

export default ExploreContainer;
