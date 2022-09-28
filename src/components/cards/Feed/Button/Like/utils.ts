export const count = 32;

interface SuccessResponse { 
  data: { 
    likeCounter: number;
  } 
};

export const httpGetCountRequest = (): Promise<SuccessResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failure = false;

      if (failure) reject({ error: { message: 'Request failed, sorry. ❌' } });

      resolve({ data: { likeCounter: count } });
    }, 2000);
  });
};

export const httpPostIncrementCountRequest = (): Promise<SuccessResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failure = false;
      
      if (failure) reject({ error: { message: 'Request failed, sorry. ❌' } });

      resolve({ data: { likeCounter: count + 1 } });
    }, 2000);
  });
};

export const httpPostDecrementCountRequest = (): Promise<SuccessResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failure = false;

      if (failure) reject({ error: { message: 'Request failed, sorry. ❌' } });

      resolve({ data: { likeCounter: count } });
    }, 2000);
  });
};