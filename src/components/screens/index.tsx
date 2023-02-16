import Home from './Home';
import { HomeScreenProps } from './Home/interfaces';
import Detail from './Detail';
import { DetailProps } from './Detail/interfaces';
import Login from './Login';
import { LoginProps } from './Login/interfaces';

const Screens: {
  Home: React.FC<HomeScreenProps>;
  Detail: React.FC<DetailProps>;
  Login: React.FC<LoginProps>
} = (): void => {};

Screens.Home = Home;
Screens.Detail = Detail;
Screens.Login = Login;


export default Screens;
