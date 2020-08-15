<template>
  <div class="wrapper">
    <el-input
      class="search"
      placeholder="请输入内容"
      v-model="keyWords">
      <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
    </el-input>
    <div class="content" v-if="results && results.length">
      <el-row v-for="(item, index) in results" :key="index">
        <div class="content-title" v-html="item.title"></div>
        <div class="content-content" v-html="item.content"></div>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      keyWords: '',
      dataArr: [],
      results: []
    }
  },
  methods: {
    search () {
      this.dataArr = [
        {title: '那些经常出差的工作,每天全国各地到处跑,你有没有羡慕呢?', content: '经常一出差就20几天各种地方跑,对于男士的出差必备神器和经验是什么? 富大师不相信眼泪 亚文化爱好者/社会活动家/耳机测评家 其实我挺理解经常出差的人的(我自己...'},
        {title: '出差的英文_出差翻译_出差英语怎么说_海词词典', content: '出差规范 1、借款报销的审批权限 1.1 公司员工因工出差借款或报销,由各部门经理审签后,报公司 财务部门审核,并送公司出差总经理批准,方能借款或报销。凡有审签权限...'},
        {title: '那些经常出差的工作,每天全国各地到处跑,你有没有羡慕呢?', content: '经常一出差就20几天各种地方跑,对于男士的出差必备神器和经验是什么? 富大师不相信眼泪 亚文化爱好者/社会活动家/耳机测评家 其实我挺理解经常出差的人的(我自己...'}
      ]
      this.changeColor(this.dataArr)
    },
    changeColor (resultsList) {
      console.log(this.dataArr)

      resultsList.map((item, index) => {
        // console.log('item', item)
        if (this.keyWords && this.keyWords.length > 0) {
          // 匹配关键字正则
          let replaceReg = new RegExp(this.keyWords, 'g')
          // 高亮替换v-html值
          let replaceString =
            '<span class="highlights-text">' + this.keyWords + '</span>'
          resultsList[index].title = item.title.replace(
            replaceReg,
            replaceString
          )
          resultsList[index].content = item.content.replace(
            replaceReg,
            replaceString
          )
        }
      })
      this.results = []
      this.results = resultsList
    }
  }
}
</script>
<style>
  .wrapper {
    width: 500px;
    margin: 0 auto
  }
  .search .el-input__inner {
    height: 40px;
    border-radius: 20px
  }
  .highlights-text {
   color: #ff5134;
  }
</style>
