module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     },
//   }
// }
