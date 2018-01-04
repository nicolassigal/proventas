module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/**.svg',
    'dist/assets/**.png',
    'dist/assets/**.jpg',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
  ]
};
