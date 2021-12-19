# networked
A simple React hook to be wrapped around API calls for simple retries and queueing.

WIP

## Usage

#### Initalize Hook with Options

```js
import createUseNetwork from 'networked';
// hooks/use-network.js;

export default createUseNetwork({
 maxRetries: [Int, default = 3], // Changing this to null will make the hook constantly attempt to reconnect, otherwise, none of the calls will be attempted again until another network call is made, which will restart the retry process.
 queue: [Boolean, default = true]
});
```

#### Component
```jsx

import useNetwork from 'hooks/use-network.js';
 
...[some arbitrary component-related code here]

const { execute, error, isLoading } = useNetwork(
  async () => {
    await (make API call here)
  }
)

...[some arbitrary component-related code here]
```
