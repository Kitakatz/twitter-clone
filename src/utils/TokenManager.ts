import decodeJWT, {JwtPayload} from 'jwt-decode';


interface TokenManagerResponse {
  getJwtToken: () => any;
  setJwtToken: (token: string) => any;
  getRefreshToken: () => any;
  setRefreshToken: (token: string) => any;
  isTokenValid: (token: string) => any;
};

const TokenManager = (): TokenManagerResponse => {
  const getJwtToken = () => {
    return sessionStorage.getItem('jwt');
  };

  const setJwtToken = (token: string) => {
    sessionStorage.setItem('jwt', token);
  };

  const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
  };

  const setRefreshToken = (token: string) => {
    sessionStorage.setItem('refreshToken', token);
  };

  const isTokenValid = (token: string) => {
    const claims: JwtPayload = decodeJWT(token);
    console.log('claims: ', claims.exp);
    if (!claims.exp) return;
    const expirationTimeInSeconds = claims.exp * 1000;
    const now = new Date();
    const isValid = expirationTimeInSeconds >= now.getTime();

    return isValid;
  };

  return {
    getJwtToken: getJwtToken,
    setJwtToken: setJwtToken,
    getRefreshToken: getRefreshToken,
    setRefreshToken: setRefreshToken,
    isTokenValid: isTokenValid
  };
};

export default TokenManager;