<template>
    <div>
        <!--
            border  竖向边框
            height  可以固定表头
        -->
        <el-table
                ref="multipleTable"
                :data="tableData3"
                v-loading="loading"
                border
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <!--type="selection"  多选-->
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="320"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
            >
            </el-table-column>
        </el-table>
        <!--<div style="margin-top: 20px">-->
            <!--<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>-->
            <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
        <!--</div>-->
        <!--分页-->
        <el-pagination
                @current-change="handleCurrentChange"
                background
                :current-page="currentPage4"
                :page-size="jitiao"
                layout="total, prev, pager, next, jumper"
                :total="zongshu"
                style='float: right'>
        </el-pagination>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        //每页条数
        jitiao:10,
        //总数
        zongshu:20,
        //起始页
        currentPage4: 1,
        //后台获取的数据
        tableData3: [],
        //选中后的数据
        multipleSelection: [],
        loading:true
      }
    },
    mounted(){
        //获取后台数据
        this.$axios.get("find.json").then(red=>{
           let con=red.data.data.find1[0].tableData;
           let main=[];
           this.zongshu=red.data.data.find1[0].zongshu;
           //初次加载第一个
           for (let i=0;i<con.length;i++){
             if (i<this.jitiao) {
                main.push(con[i])
             }
           }
           this.tableData3=main;
           //取消加载动画
           this.loading=false;
          console.log(red.data.data.find1[0].tableData)
        })
    },

    methods: {
      //选中某些行
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          //清空用户选择
          this.$refs.multipleTable.clearSelection();
        }
      },

      //选中后拿到数据
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },


      //点击时候获取第几页
      handleCurrentChange(val) {
        //获取数据
        console.log(val)
        //获取后台数据
        this.$axios.get("find.json").then(red=>{
          let con=red.data.data.find1[0].tableData;
          let main=[];
          this.zongshu=red.data.data.find1[0].zongshu;
          for (let i=0;i<con.length;i++){
            //判断范围
            if ((val-1)*this.jitiao<=i && i<val*this.jitiao) {
              main.push(con[i])
            }
          }
          this.tableData3=main;
          // console.log(red.data.data.find1[0].tableData)
        })
      }
    }
  }
</script>

<style scoped>
    .el-pagination.is-background{
        width: 100%;
        height: 34px;
        margin-top: 10px;
    }
</style>