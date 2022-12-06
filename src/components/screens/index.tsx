import Home from './Home';
import { HomeScreenProps } from './Home/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';

const Screens: {
  Home: React.FC<HomeScreenProps>;
  Detail: React.FC<DetailProps>;
} = (): void => {};

Screens.Home = Home;
Screens.Detail = Detail;


export default Screens;
