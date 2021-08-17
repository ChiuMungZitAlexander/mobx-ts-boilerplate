export default (delay = 1500): Promise<void> =>
  new Promise((res) =>
    setTimeout(() => {
      res();
    }, delay),
  );
