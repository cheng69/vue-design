<template>
    <div>
        <section class='silide-wrap'>
            <el-carousel :interval="0" arrow="never"  height='420px'>
                <el-carousel-item v-for="(item,index) in silideData" :key="index">
                    <img class='silide-img' :src="item.img" :alt="item.id">
                </el-carousel-item>
            </el-carousel>
            <!--搜索-->
            <article class='search-wrap'>
                <input class='search' type="text" property='输入'>
                <div class='search-btn' @click='emitParent'>搜索</div>
            </article>
        </section>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'silide',
    //接受父页面  的数据
    props:{
      lunboData:[Object,Array ]
    },
    data(){
      return{
        silideData:[]
      }
    },
    mounted(){
      this.silideData=this.lunboData[0].content.map(item=>{
        let src=null;
        try {
          src=require(`../assets/${item.img}.jpg`)
        }catch (e) {
        }
        return{
          id:item.id,
          img:src
        }
      });
      // console.log(this.lunboData[0])
    },
    methods:{
      emitParent(){
        //         父页面的方法   传给父页面的数据
        this.$emit('child-click','我是子组件silide返回的')
      }
    }
  }
</script>

<style scoped lang='less'>
    .silide-wrap{
        width: 100%;
        position: relative;
    }
    .search-wrap{
        position: absolute;
        width: 680px;
        height: 42px;
        left: 50%;
        top: 50%;
        margin-top: -21px;
        margin-left: -340px;
        border: 1px solid rgba(255, 255, 255, .6);
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }
    .search{
        width: 600px;
        outline: none;
        border: 0;
        height: 40px;
        background: none;
        color: #fff;
        text-indent: 6px;
    }
    .search-btn{
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: absolute;
        color: #fff;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    .silide-img{
        width: 100%;
        height: 100%;
    }
</style>