// main.js
// Root Vue 객체의 생성을 위해 데이터 가져오기

import { createApp } from 'vue' //import는 노드가 가지고 있는 require와 같다
// vue 객체 생성하기
import App from './App.vue' //vue로 끝나는 것 하나하나가 객체(페이지?)가 됨
// vue router 가져오기
import router from './router'

createApp(App)
.use(router) //루트 객체를 만들고
.mount('#app')  //마운트 메서드를 사용해서 돔에 연결.('#app')에 연결 #은 아이디


/* node.js
modeul.exports = {}이 방식과 let val require('')노드의 방식이 동일한 느낌으로 사용
----------------------
export defaurt{} 이걸로 통일 html과 css에서도 동일하게 사용함.
import val form '' = ex6방식으로 사용
----------------- 여기까지가 뷰에서 사용하는 방식

modeul.exports = {}         | export defaurt{} 
 let val require('')        | import val form '' = {} 
 common js                     vue.js

*/