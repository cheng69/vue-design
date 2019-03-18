<template>
    <div>
        <section>
            <article>
                <ul class='set-ul'>
                    <li v-for='(list,listIndex) in item' :key='listIndex'>{{list}}</li>
                </ul>
                <el-button type='primary' class='set-ul-button' @click='setAppend()'>set添加</el-button>
                <el-button type='primary' class='set-ul-huancun' @click='setHuanCun()'>获取缓存</el-button>
                <el-button type='primary' class='set-ul-huancun' @click='removeHuanCun()'>删除缓存</el-button>
                <el-button type='primary' class='set-ul-huancun' @click='luyouChuanCan()'>获取路由传递的参数</el-button>

            </article>
            <article>
                <!--弹框 dialog-->
                <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

                <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="活动名称" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域" :label-width="formLabelWidth">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="btnQD()">确 定</el-button>
                    </div>
                </el-dialog>
            </article>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        item:{
          list1:'第一个',
          list2:'第二个'
        },
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
        },
        formLabelWidth: '120px'
      }
    },
    mounted(){

    },
    methods:{
      //set 修改-添加
      setAppend(){
        this.$set(this.item,'list3','第三个')
      },
      //获取本地缓存
      setHuanCun(){
        const data=JSON.parse(sessionStorage.getItem('huanCun'))
        console.log(data)
      },
    //  删除本地缓存
      removeHuanCun(){
        sessionStorage.removeItem('huanCun')
      },
      luyouChuanCan(){
        //  获取路由传递过来的参数
        let luyou=this.$route.params.Id
        console.log(luyou)
      },

    //  弹窗表单确认按钮
      btnQD(){
        this.dialogFormVisible = false;
        console.log(this.form)
        //提示信息
        this.$message({
          message: '已提交',
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped lang='less'>
    .set-ul{
        width: 100%;
        li{

        }
    }
    .set-ul-button{
        margin-top: 20px;
        padding: 5px 10px;
    }
    .set-ul-huancun{
        margin-top: 20px;
        padding: 5px 10px;
    }




</style>