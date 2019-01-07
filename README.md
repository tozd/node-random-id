# @tozd/random-id

This node.js package provides random ID generation compatible with [Meteor](https://docs.meteor.com/packages/random.html#Random-id).

## Installation

This is a node.js package. You can install it using NPM:

```bash
$ npm install @tozd/random-id
```

## Usage

```js
const {randomId} = require('@tozd/random-id');

(async () => {
  const id = await randomId();

  console.log(id);
})().catch((error) => {
  console.error("async error", error);
});
```
