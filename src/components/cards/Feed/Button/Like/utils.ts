const count = 32;

export const httpRequest = (): Promise<{ data: { likeCounter: number } }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { likeCounter: count }});
    }, 3000);
  });
};