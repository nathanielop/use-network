import queue from './queue.js';

export default options => fn => queue.add({ options, fn });
