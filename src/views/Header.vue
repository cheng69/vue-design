<template>
    <div>
        <header id='header'>
            <section class='header-top'>
                <article class='header-top-con clearfloat'>
                    <div class='pull-left'>
                        <p><i class='icon iconfont iconqr_code'></i><span @click='sessionHuancun()'>几案官方微信平台</span></p>
                    </div>
                    <div class='pull-right'>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                帮助中心<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>

                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>常见问题</el-dropdown-item>
                                <el-dropdown-item>热门问题</el-dropdown-item>
                                <el-dropdown-item>信息反馈</el-dropdown-item>
                                <el-dropdown-item divided>你有问题？</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                网站导航<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>作品</el-dropdown-item>
                                <el-dropdown-item>素材</el-dropdown-item>
                                <el-dropdown-item>成功案例</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </article>
            </section>
            <section class='header-bottom'>
                <nav class='nav clearfloat'>
                    <div class='nav-logo'>
                        <a href="#"><img src="@/assets/images/logo.svg" alt="logo"></a>
                    </div>
                    <div class='nav-con'>
                        <div class='nav-con-ul clearfloat'>
                            <!--:class='{"router-link-exact-active":headerXz==itemIndex}'-->
                            <!--:class='[{"router-link-exact-active":headerXz==itemIndex},{"xinjiade":itemIndex==1&&routerClass}]'-->
                            <router-link :to='{name:item.name}' :class='[{"router-link-exact-active":headerXz==itemIndex},{"nav-routerFind":itemIndex==1&&routerClass}]'   v-for='(item,itemIndex) in HeaderData' :key='itemIndex'>
                                <div class='nav-con-li'   @click='headerClick(itemIndex)'>{{item.title}}</div>
                            </router-link>
                        </div>
                    </div>
                    <div class='nav-sub'>
                        <div class='nav-sub-btn1'>项目大厅</div>
                        <div class='nav-sub-btn2'>家具企业</div>
                    </div>
                </nav>
            </section>
        </header>
    </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        headerXz:-1,
        routerClass:false,
        HeaderData:[
          {title:'首页',name:'home'},
          {title:'功能',name:'huodong'},
        ]
      }
    },
    mounted(){
      let a=window.location.href;
      if (a.indexOf('huodong') != -1){
            this.routerClass=true
      }
    },
    methods:{
      headerClick(index){
        this.headerXz=index;
        //判断是不是点击的  活动 路由
        if(index!=1){
          this.routerClass=false;
        }
      },
    //  本地缓存
      sessionHuancun(){
        const ord={price:'我是缓存的'}
        sessionStorage.setItem('huanCun',JSON.stringify(ord))
      }
    }
  }
</script>

<style scoped lang='less'>
#header{
    width: 100%;
    position: relative;
    .header-top{
        background: #444;
        color: #999;
        font-size: 12px;
        .header-top-con{
            height: 40px;
            line-height: 39px;
            width: 1180px;
            margin: 0 auto;
            .pull-left{
                float: left;
                width: 150px;
                i{
                    float: left;
                    font-size: 12px;
                }
                span{
                    float: left;
                    cursor: pointer;
                }
            }
            .pull-right{
                font-size: 12px;
                float: right;
                .el-dropdown{
                    margin-left: 15px;
                    .el-dropdown-link{
                        color: #8d8d8d;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .header-bottom{
        width: 100%;
        height: 90px;
        box-shadow: 0 3px 6px rgba(200, 200, 200, .2);
        background: #fff;
        .nav{
            width: 1180px;
            margin: 0 auto;
            padding: 0;
            .nav-logo{
                padding: 18px 0;
                float: left;
                margin-right: 100px;
                img{
                    display: block;
                    width: 140px;
                }
            }
            .nav-con{
                float: left;
                .nav-con-ul{
                    margin-top: 30px;
                    font-size: 15px;
                    font-weight: bold;
                    .nav-con-li{
                        height: 30px;
                        line-height: 30px;
                        float: left;
                        margin-right: 30px;
                        color: #222;
                        cursor: pointer;
                        &:hover{
                            color: #E44F77;
                        }
                    }
                    /*.nav-con-li-xz{*/
                        /*color: #E44F77;*/
                    /*}*/
                    .router-link-exact-active .nav-con-li{
                        color: #E44F77;
                    }
                    .nav-routerFind .nav-con-li{
                        color: #E44F77;
                    }
                }
            }
            .nav-sub{
                float: right;
                margin-top: 30px;
                .nav-sub-btn1,.nav-sub-btn2{
                    width: 100px;
                    height: 36px;
                    display: inline-block;
                    line-height: 36px;
                    border-radius: 4px;
                    margin-left: 10px;
                    font-size: 15px;
                    cursor: pointer;
                    text-align: center;
                    &:hover{
                        color: #fff;
                        background: #DD5051;
                    }
                }
            }
        }
    }
}
</style>