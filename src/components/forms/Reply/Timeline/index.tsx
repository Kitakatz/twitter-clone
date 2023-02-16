import Cards from '../../../cards';
import './styles.css';

const Timeline: React.FC = (): React.ReactElement => {
  return (
    <div className='reply-timeline'>
      <Cards.Avatar src='/aws-amplified.png' />
      <div className='line'></div>
    </div>
  );
};

export default Timeline;