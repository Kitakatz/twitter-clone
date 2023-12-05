import decodeJWT, {JwtPayload} from 'jwt-decode';

interface TokenManagerResponse {
  getAccessToken: () => any;
  setAccessToken: (token: string) => any;
  removeAccessToken: () => void;
  getRefreshToken: () => any;
  setRefreshToken: (token: string) => any;
  removeRefreshToken: () => void;
  isTokenValid: (token: string) => any;
};

const TokenManager = (): TokenManagerResponse => {
  const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
  };

  const setAccessToken = (token: string) => {
    sessionStorage.setItem('accessToken', token);
  };

  const removeAccessToken = () => {
    sessionStorage.removeItem('accessToken');
  };

  const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
  };

  const setRefreshToken = (token: string) => {
    sessionStorage.setItem('refreshToken', token);
  };

  const removeRefreshToken = () => {
    sessionStorage.removeItem('refreshToken');
  };

  const isTokenValid = (token: string) => {
    const claims: JwtPayload = decodeJWT(token);
    // console.log('claims: ', claims.exp);
    if (!claims.exp) return;
    const expirationTimeInSeconds = claims.exp * 1000;
    const now = new Date();
    const isValid = expirationTimeInSeconds >= now.getTime();

    return isValid;
  };

  return {
    getAccessToken: getAccessToken,
    setAccessToken: setAccessToken,
    removeAccessToken: removeAccessToken,
    getRefreshToken: getRefreshToken,
    setRefreshToken: setRefreshToken,
    removeRefreshToken: removeRefreshToken,
    isTokenValid: isTokenValid
  };
};

export default TokenManager;