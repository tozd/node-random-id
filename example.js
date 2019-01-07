const {randomId} = require('@tozd/random-id');

(async () => {
  const id = await randomId();

  console.log(id);
})().catch((error) => {
  console.error("async error", error);
});
