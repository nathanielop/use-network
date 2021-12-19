import queue from './queue.js';

export default async () => {
  const process = () => {
      let errorState = false;

      do {
        const req = [...queue][0];
        const { options, fn } = req;

        try {
          await fn();
          queue.delete(req);
        } catch (er) {
          // something here;
          throw new Error(er);
        }
      } while (queue.size && !errorState);

      setTimeout(process(), 5000);
  }

  setTimeout(process(), 5000);
};
