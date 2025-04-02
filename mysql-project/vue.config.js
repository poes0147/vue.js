const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000/';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    proxy : {
      '^/api' :{ //'^/api' 정규표현식 ^ 시작 문자열
        target : serverOrigin, //변경할 origin
        changeOrigin : true, //true로 해야 타깃 변경
        ws : false, //웹소켓
        pathRewrite : { '^/api':'/'} //경로 제작성
      }
    }
  }
})
