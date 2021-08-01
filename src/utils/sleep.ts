export default (delay = 1500): Promise<null> =>
  new Promise((res) =>
    setTimeout(() => {
      res(null);
    }, delay),
  );
