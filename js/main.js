console.log("Hello Parcel!");


async function test() {
  // aync 비동기함수
  const promise = Promise.resolve(123)
  console.log(await promise); 
  // await promise
}

test();
//async await(ES2017 ES8)
//는 기본 Babel으로는 제공하고있지않다. 
// @babel/plugin-transform-runtime이 필요