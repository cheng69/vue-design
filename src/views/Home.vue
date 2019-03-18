<template>
  <div class="home">
    <!--轮播图-->
    <section>
      <!--     父传子                  有数据后再显示-->
      <Silide :lunboData='silideData' v-if='silideData.length' @child-click='emitChild'></Silide>
    </section>
    <!--快捷按钮-->
    <section class='adv'>
      <el-row :gutter="20">
        <el-col class='adv-juzhong' v-for='(advItem,advItemIndex) in homeData' :key='advItemIndex'>
          <a href='#' class="grid-content bg-purple"><img :src="advItem.img" :alt="advItem.id"></a>
        </el-col>
      </el-row>
    </section>
    <!--tab-->
    <section class='tab'>
      <article class='tab-top'>
        <div class='tab-top-btn' :class='{"tab-top-btn-xz":tabXz===btnIndex}'  v-for='(btn,btnIndex) in tabId' @click='btnClick(btnIndex)' :key='btnIndex'>{{btn.id}}</div>
      </article>
      <article class='tab-con'>
        <div class='tab-con-wrap'>
          <ul class='tab-con-ul clearfloat'  :class='{"tab-con-ul-xz":tabXz===mainIndex}' v-for='(main,mainIndex) in tabData' :key='mainIndex' >
            <li class='tab-con-li' v-for='(tab,tabIndex) in main' :key='tabIndex'>
              <div class='tab-con-img'>
                  <img :src="tab.img" alt="">
              </div>
              <!---->
              <div class='tab-padding'>
                <p class='tab-con-name'>
                  <a href="#">{{tab.name}}</a>
                  {{tab.lei}}
                </p>
                <p class='tab-con-row'>
                  <span class='view icon iconfont iconchakan'>{{tab.view}}</span>
                  <span class='comment icon iconfont iconpinglun'>{{tab.comment}}</span>
                  <span class='praise icon iconfont icondianzan'>{{tab.praise}}</span>
                </p>
                <div class='tab-con-user'>
                  <i class='icon iconfont iconren'></i>
                  <span class='tab-con-user-name'>{{tab.userName}}</span>
                  <span class='tab-con-user-sj'>{{tab.userSj}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>

  </div>
</template>
<style scoped lang='less'>
  .adv{
    width: 100%;
    padding-top: 20px;
  }
  .el-row {
    width: 1180px;
    margin: 0 auto !important;
  }
  .el-col {
    border-radius: 4px;
  }
  .adv-juzhong{
    width: 20%;
  }
  .grid-content {
    border-radius: 4px;
    height: 176px;
    text-align: center;
  }
  /*tab*/
  .tab{
    width: 100%;
    padding-top: 10px;
    .tab-top{
      width: 300px;
      height: 70px;
      margin: 0 auto;
      .tab-top-btn{
        float: left;
        width: 100px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        &:hover{
          border-bottom: 1px solid #DD5050;
          color: #DD5050;
        }
      }
      .tab-top-btn-xz{
        border-bottom: 1px solid #DD5050;
        color: #DD5050;
      }
    }
    .tab-con{
      width: 1180px;
      margin: 0 auto;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
    .tab-con-wrap{
      width: 100%;
      .tab-con-ul{
        display: none;
        .tab-con-li{
          float: left;
          width: 20%;
          padding-right: 5px;
          margin-bottom: 20px;
          .tab-con-img{
            width: 100%;
            height: 170px;
            overflow: hidden;
          }
          .tab-padding{
            padding: 0 5px;
            .tab-con-name{
              font-size: 12px;
              color: #ccc;
              a{
                display: block;
                font-size: 14px;
                color: #333;
              }
            }
            .tab-con-row{
              margin: 10px 0;
              color: #ccc;
              .view{
                padding-right: 5px;
                font-size: 12px;
              }
              .comment{
                padding-right: 5px;
                font-size: 12px;

              }
              .praise{
                font-size: 12px;
              }
            }
            .tab-con-user{
              height: 30px;
              line-height: 30px;
              border-top: 1px solid #eee;
              i{
                font-size: 14px;
              }
              .tab-con-user-name{
                font-size: 15px;
                margin-left: 10px;
              }
              .tab-con-user-sj{
                float: right;
                font-size: 15px;
                margin-right: 15px;
                color: #ccc;
              }
            }
          }

        }
      }
      .tab-con-ul-xz{
        display: block;
      }
    }
  }
</style>
<script>
// @ is an alias to /src

import Silide from '@/components/silide.vue'
export default {
  name: 'home',
  components: {
    Silide
  },
  data(){
    return{
      homeData:[],
      tabData:[],
      silideData:[],
      tabId:[],
      tabXz:0,
    }
  },
  mounted(){
    this.$axios.get('home.json'

        ).then(res=>{
      this.homeData=res.data.data.adv.map(item=>{
        let src=null;
        try {
          src=require(`../assets/${item.img}.jpg`)
        }catch (e) {

        }
        return{
          id:item.id,
          img:src
        }
      })
      //tab  数据
      var main=[];
      var mainId=[]
      for (let i=0;i<res.data.data.tab.length;i++){
        //映射修改
        main=res.data.data.tab[i].con.map(item=>{
          let src=null;
          try {
            src=require(`../assets/${item.img}.png`)
          }catch (e) {}
          return{
            img:src,
            name:item.name,
            lei:item.lei,
            view:item.view,
            comment:item.comment,
            praise:item.praise,
            userName:item.userName,
            userSj:item.userSj,

          }
        })
        this.tabData.push(main)

        mainId=res.data.data.tab[i]
        this.tabId.push(mainId)

      }


    //轮播数据
      this.silideData=res.data.data.silide;
    }).catch((err)=>{

    })
  },
  methods:{
    btnClick(index){
      this.tabXz=index;
    },
    emitChild(val){
      console.log(val)
    }
  }
}
</script>

