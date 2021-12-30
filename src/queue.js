import processQueue from './process-queue.js';

const requests = new Set();

let reqId = 0;

export default {
  add: ({ options, fn }) => {
    requests.add({ id: ++reqId, fn });
    processQueue.execute({ options });
    return { error, data, isLoading };
  },
  flush: () => requests.clear(),
  delete: obj => requests.delete(obj),
  requests
};
