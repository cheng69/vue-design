<template>
  <div id="app">
    <appHeader></appHeader>
    <div id='app-main'>
      <router-view/>
    </div>
    <appFooter></appFooter>
  </div>
</template>
<script>
  import appHeader from '@/views/Header'
  import appFooter from '@/views/Footer'

  export default {
    name:'app',
    components:{
      appHeader,
      appFooter
    }
  }
</script>
<style lang="less">
*{margin:0;padding:0;box-sizing: border-box}
a{text-decoration:none}
ul{list-style: none}
  .cleatfloat{
    zoom: 1;
}
.clearfloat:after{
  display: table;
  content: '';
  visibility: hidden;
  height: 0;
  clear: both;
}
.clearfloat:before{
  content: '';
  display: table;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
