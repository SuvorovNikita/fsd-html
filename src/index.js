import './js/common'
import './assets/css/main.css'
import './assets/scss/main.scss'
import  './block/header-top/header-top.scss'



function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
  
  importAll(require.context('../src/', true, /\.js$|\.scss$/));