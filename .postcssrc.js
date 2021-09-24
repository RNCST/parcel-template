// browser방식에서는 ES Module 개념이 import export
// Nodejs에서는 CommonJS방식을 쓴다
//import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer');
/*
export {
  plugins: [
    autoprefixer
  ]
}
*/
// module.exports = {
//   plugins: [
//     autoprefixer,
//   ]
// }


module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}



