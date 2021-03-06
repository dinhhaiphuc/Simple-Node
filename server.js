// Set a local variable populated by the environment variable $NAME
const FAVORITE_INSTRUCTOR = process.env.NODEJS_NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_INSTRUCTOR} rule!`);
    await sleep(5000);
  }
}

main();
