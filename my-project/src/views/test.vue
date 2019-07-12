<template>
  <div>
    <city></city>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>


    <!--watch监听按钮2222-->
    <h1>watch监听按钮2222</h1>
    <div class="form_line">
      <label>用户名:</label>
      <input v-model="info.name" placeholder="请输入用户名" />
    </div>
    <div class="form_line">
      <label>密码:</label>
      <input v-model="info.passw" placeholder="请输入密码" />
    </div>
    <button :class="{active:info.name&&info.passw}" class="login-btn" @keyup.enter.native>确认</button>

    <!--watch监听按钮1111-->
    <h1>watch监听按钮1111</h1>
    <div>
      <el-input v-model="demo"></el-input>
      <el-input v-model="demo"></el-input>
      <div v-if="!value" class="button-NO">确定</div>
      <div v-else class="button-yes">确定</div>
    </div>


    <!--计算属性-->
    <h1>学科计分器</h1>
    <div v-for="subject in results" class="subject">
      <input v-model="subject.marks" />
      <span>{{ subject.name }}得分: {{ subject.marks }}</span>
    </div>
    <div class="total">学科总分: {{ totalMarks}}</div>

    <!--for循环图片-->
    <h2>for循环图片</h2>
    <div v-for="imgList in imgList" :key="imgList">
      <img src="../assets/images/logo.png"/>
    </div>

    <!--储存数据在浏览器本地-->
    <h2>本地储存</h2>
    <div @click="gok()">
      ddd
    </div>

    <br/>
    <br/>
    <!--饿了么分页-->
    <h2>饿了么分页</h2>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

    <br/>
    <br/>
    <!--计算文本域中输入内容-->
    <h2>计算文本域中输入内容</h2>
    <div class="content">
      <textarea v-model="workCount" :maxlength="totalcount" ></textarea>
      <div>您还可以输入<span>{{workTotal}}</span>个字</div>
    </div>

    <br/>
    <br/>
    <!--勾选-->
    <h2>勾选</h2>
    <div>
      <img src="../assets/images/choose_nor.png" v-if="!selectImage" @click="tav()"/>
      <img src="../assets/images/choose_pre.png" v-else="selectImage" @click="tav()"/>
    </div>


    <table class="table table-bordered">
      <caption>活着的 <button class="btn btn-info" @click="add">增加</button></caption>
      <tr v-for="(item, index) in items">
        <td>{{item}}</td>
        <td><button class="btn btn-danger" @click="remove(index)">删除</button></td>
      </tr>
    </table>

    <div @click="linkgo">跳转页面</div>
  </div>
</template>

<script>
  import City from '@/components/common/city'
  let imgList=[1,2]
  export default {
    name: "test",
    data(){
      return{
        show:true,
        info:{
          name:'',
          passw:''
        },
        demo: '',
        value: '',
        results: [
          {
            name: '英语',
            marks: 70
          },
          {
            name: '数学',
            marks: 80
          },
          {
            name: '历史',
            marks: 90
          }
        ],
        //图片
        imgList:imgList,
        //饿了么分页
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        //计算文本域中输入内容
        workCount:'',
        totalcount:140,
        //图片切换
        selectImage:false,

        items: ['test'],
        deletedItems: []
      }
    },
    methods:{
      gok:function(){
        this.common.setStorage('userData', JSON.stringify(this.results))  //把数据储存
        console.log('jb',this.$fff);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      tav:function () {
        this.selectImage=!this.selectImage
      },

      add() {
        this.items.push(new Date());
      },
      remove(i) {
        this.deletedItems = this.deletedItems.concat(this.items.splice(i, 1));
      },

      //路由带参数跳转页面
      linkgo(){
        // this.$router.toQuery({name:'doc',params:{id:123}})
        this.$router.toQuery('/doc',{id:11})
      }
    },

    //计算属性
    computed: {
      totalMarks: function () {
        let total = 0
        let me = this
        for (let i = 0; i < me.results.length; i++) {
          total += parseInt(me.results[i].marks)
        }
        return total
      },
      //计算文本域中输入内容
      workTotal:function(){
        return this.totalcount-this.workCount.length
      }
    },
    //监听
    watch:{
      // info:{
      //   handler(curVal,oldVal){
      //       console.log(oldVal)
      //   },
      //   deep:true
      // }
      demo(val) {
        this.value = this.demo;
      }
    },
    components:{
      City
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .button-NO{
    background-color: #ccc;
    width:30%;
    border:none;
    color:#fff;
    height:20%;
  }
  .button-yes{
    background-color: red;
    width:30%;
    border:none;
    color:#fff;
    height:20%;
  }
  .login-btn{
    background-color: #ccc;
    border:none;
    width:50%;
    height:40px;
  }
  .active{
    background-color: blue;
    border:none;
    width:50%;
    height:40px;
    color:#fff;
  }



  h1 {
    text-align: center;
    color: #666;
    margin: 0 0 20px;
  }
  .subject {
    margin-bottom: 10px;
    padding: 5px;
  }

  input {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }

  .total {
    border-top: 3px double #ccc;
    margin-top: 20px;
    padding-top: 20px;
    text-align: center;
    color: #27AE60;
    font-size: 16px;
    font-weight: bold;
  }


  /*计算留言板文字数量*/
  .content{
    background: white;
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 15px;
    box-sizing: border-box;
    min-width: 50vw;
  }
</style>
