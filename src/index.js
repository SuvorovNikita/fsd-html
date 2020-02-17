import './js/common'
import './assets/css/main.css'
import './assets/scss/main.scss'
function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
  importAll(require.context('../src/', true, /\.js$|\.scss$/));