<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>{{count}}</h3>
        <!--<h3>{{$store.state.count}}--{{count}}</h3>-->

        <article>
            <el-button type='primary' @click='$store.commit("add",10)'>加</el-button>
            <el-button type='primary' @click='reduce'>减</el-button>
            <!--<el-button type='primary' @click='$store.commit("reduce")'>减</el-button>-->

        </article>
        <article>
            <el-button type='primary' @click='addAction'>加</el-button>
            <el-button type='primary' @click='reduceAction'>减</el-button>
            <!--<el-button type='primary' @click='$store.commit("reduce")'>减</el-button>-->

        </article>
    </div>
</template>

<script type="text/ecmascript-6">
  import store from '@/vuex/store.js'

  import {mapState,mapMutations,mapActions} from 'vuex'
  export default {
    data(){
      return{
        msg:'hello vuex'
      }
    },
    computed:{
      ...mapState(['count']),
      // ...mapGetters(['count']),

    },
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addAction','reduceAction'])
    },
    // computed:{
      // count(){
      //   return this.$store.state.count
      // }
    // },
    store
  }
</script>

<style scoped>

</style>