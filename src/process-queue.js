import queue from './queue.js';

export default async ({ options = {} }) => {
  let index = 0;
  options = validateOptions(options);

  const process = async () => {
    let error;
    let isLoading = true;
    do {
      const req = [...queue.requests][index];
      try {
        await req.fn();
        queue.delete(req);
        ++index;
        isLoading = false;
      } catch (er) {
        error = er;
        isLoading = false;
        throw er;
      }
    } while (queue.requests.size && !error);

    setTimeout(process(), 5000);
  }

  return { execute: process() };
};
