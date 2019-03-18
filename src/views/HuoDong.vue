<template>
    <div>
        <section class='activity'>
            <article class='tab'>

                <router-link :to='{name:item.name,query:{Id:itemIndex}}'   v-for='(item,itemIndex) in activeity' :key='itemIndex'>
                    <!--:class='{"router-link-exact-active":tabXz===itemIndex}'-->
                    <span class='tab-link'  @click='tabClick(itemIndex)'>{{item.title}}</span>
                </router-link>
            </article>
            <article>
                <router-view></router-view>
            </article>
            <article>
                {{$store.state.count}}
            </article>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">

  // import Footer from '@/views/Footer.vue'
  import store from '@/vuex/store.js'

  export default {
    components:{
      // Footer
    },
    data(){
      return{
        tabXz:-1,
        activeity:[
          {title:'表格分页',name:'find1'},
          {title:'进行中',name:'find2'},
          {title:'set',name:'find3'},
          {title:'vuex',name:'findVuex'},
        ]
      }
    },
    methods:{
      tabClick(index){
        this.tabXz=index;
      },

    },
    store
  }
</script>

<style scoped lang='less'>
    @Color:#dd5050;
    .activity{
        width: 100%;
    }
    .tab{
        width: 1180px;
        margin: 0 auto;
        text-align: center;
        .tab-link{
            display: inline-block;
            line-height: 64px;
            padding: 0 10px;
            margin: 0 5px;
            font-size: 14px;
            cursor: pointer;
            font-weight: bold;
            color: #666;
            border-bottom: 2px solid #fff;
            &:hover{
                color: @Color;
                border-bottom: 2px solid @Color;

            }
        }
        .router-link-exact-active .tab-link{
            color: @Color;
            border-bottom: 2px solid @Color;
        }
    }
</style>