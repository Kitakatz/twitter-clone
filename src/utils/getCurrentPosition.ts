
const getCurrentPosition = (): void => {
  const successCallback = (position: any) => {
    console.log(position);
  };

  const errorCallback = (error: any) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition( successCallback, errorCallback );
};

export default getCurrentPosition;