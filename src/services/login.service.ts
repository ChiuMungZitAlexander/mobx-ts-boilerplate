import { sleep } from 'src/utils';

export const logIn = async ({ name }: { name: string }): Promise<boolean> => {
  await sleep();

  return Boolean(name);
};
