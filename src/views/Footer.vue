<template>
    <div>
        <section class='footer'>
            <article class='footer-links'>
                <div class='footer-links-logo'>
                    <img src="../assets/images/logo.svg" alt="">
                </div>
                <div class='footer-links-pull'>
                    <ul class='footer-links-ul clearfloat'>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">版权声明</a></li>
                        <li><a href="#">关于隐私</a></li>
                        <li><a href="#">免责声明</a></li>
                    </ul>
                </div>
                <div class='footer-right'>
                    <ul class='footer-right-ul'>
                        <li><i class='icon iconfont iconweixin'></i></li>
                        <li><i class='icon iconfont iconweibo'></i></li>
                    </ul>
                </div>
            </article>
            <article class='footer-youqing'>
                <ul class='footer-youqing-ul clearfloat'>
                    <li><a href="#">别墅门</a></li>
                    <li><a href="#">广东欧式家具</a></li>
                    <li><a href="#">软装采购</a></li>
                    <li><a href="#">宁波房产</a></li>
                    <li><a href="#">全屋定制</a></li>
                    <li><a href="#">福州房产</a></li>
                    <li><a href="#">培训椅</a></li>
                    <li><a href="#">深圳铝合金门窗</a></li>
                    <li><a href="#">足疗沙发</a></li>
                    <li><a href="#">南昌办公室出租</a></li>
                    <li><a href="#">品牌vi设计</a></li>
                    <li><a href="#">家和美只能晒衣架</a></li>
                    <li><a href="#">垂直绿化墙</a></li>
                </ul>
                <p class='footer-youqing-copy'>
                    <span class='footer-youqing-copy-s1'>闽ICP备17011995号-1 / 网安备案编号:110105000501 </span>
                    <span class='footer-youqing-copy-s2'>Copyright © 2017 几案</span>
                </p>
            </article>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang='less'>
    .footer{
        width: 100%;
        height: auto;
        background: #282828;
    }
    //头部
    .footer-links{
        width: 1180px;
        height: 120px;
        margin: 0 auto;
        border-bottom: 1px solid #333333;
        .footer-links-logo{
            width: 120px;
            margin-top: 38px;
            float: left;
        }
        .footer-links-pull{
            float: left;
            margin-left: 30px;
            .footer-links-ul{
                margin-top: 45px;
                li{
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    float: left;
                    margin-right: 20px;
                    a{
                        color: #666;
                        &:hover{
                            color: #fff;
                        }
                    }
                }
            }
        }
        .footer-right{
            float: right;
            .footer-right-ul{
                margin-top: 45px;
                li{
                    height: 30px;
                    line-height: 30px;
                    float: left;
                    margin-left: 30px;
                    i{
                        font-size: 22px;
                        color: #666;
                        cursor: pointer;
                        &:hover{
                            color: green;
                        }
                    }
                }
            }
        }
    }

    //底部
    .footer-youqing{
        width: 1180px;
        margin: 0 auto;
        padding-bottom: 15px;
        .footer-youqing-ul{
            margin-top: 30px;
            li{
                position: relative;
                float: left;
                padding-right: 10px;
                margin-right: 10px;
                font-size: 14px;
                height: 30px;
                line-height: 30px;
                a{
                    color: #666;
                    font-size: 14px;
                    &:hover{
                      color: #999;
                    }
                }
                &:before{
                    position: absolute;
                    content: '';
                    right: 0;
                    top: 7px;
                    width: 1px;
                    height: 15px;
                    background: #666;
                }
            }
            li:last-child{
                &:before{
                    background: none;
                }
            }
        }
        .footer-youqing-copy{
            color: #666;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            margin-top: 15px;
            font-size: 12px;
            .footer-youqing-copy-s1{
                float: left;
            }
            .footer-youqing-copy-s2{
                float: right;
            }
        }
    }
</style>