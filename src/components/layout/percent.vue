<template>
  <div class="wrap">
    <!-- <div class="wrap-content">
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
      <div class="wrap-content-item">
        <div class="wrap-content-itemcontent"></div>
      </div>
    </div> -->

    <div class="content">
      <el-carousel class="big" indicator-position="outside" :autoplay="false" arrow="never">
          <el-carousel-item v-for="(item,index) in dataArr" :key="index">
            <el-row :gutter="20">
              <el-col v-for="item1 in item" :key="item1.id" :span="6">
                <div class="grid-content bg-purple grid-content-height">
                  {{ item1.id }}
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      <el-carousel class="small" indicator-position="outside" :autoplay="false" arrow="never">
          <el-carousel-item v-for="(item,index) in dataArr" :key="index">
            <el-row :gutter="20">
              <el-col v-for="item1 in item" :key="item1.id" :span="6">
                <div class="grid-content bg-purple grid-content-height">
                  {{ item1.age }}
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
    </div>
    <el-container>
      <el-main>
        <el-carousel indicator-position="outside" :autoplay="false" arrow="never">
          <el-carousel-item v-for="(item,index) in dataArr" :key="index">
            <el-row :gutter="20">
              <el-col v-for="item1 in item" :key="item1.id" :span="6">
                <div class="grid-content bg-purple grid-content-height">
                  {{ item1.id }}
                </div>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-main>
      <el-aside width="30%">Aside</el-aside>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataArr: [
        [{id: '1', age: 11},
          {id: '2', age: 12},
          {id: '3', age: 13},
          {id: '4', age: 14},
          {id: '5', age: 15},
          {id: '6', age: 16},
          {id: '7', age: 17},
          {id: '8', age: 18}],
        [
          {id: '1', age: 19},
          {id: '2', age: 20},
          {id: '3', age: 21},
          {id: '4', age: 22},
          {id: '5', age: 23},
          {id: '6', age: 24},
          {id: '7', age: 25},
          {id: '8', age: 26}
        ]
      ]
    }
  }
}
</script>
<style>
  .wrap {
    width: 1200;
    height: 8000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #eee;
  }
  .wrap .wrap-content {
    width: 100%;
    height: 500px;
    background-color: #ccc;
    /* display: flex; */
  }
  .wrap .wrap-content .wrap-content-item {
    /* flex: 1; */
    width: 25%;
    float: left;
    height: 200px;
    background-color: pink;
  }
  .wrap-content-item:nth-child(1),
  .wrap-content-item:nth-child(2),
  .wrap-content-item:nth-child(3),
  .wrap-content-item:nth-child(4){
    margin-bottom: 20px;
  }
  /* .wrap-content-itemcontent {
    width: 200px;
    height: 200px;
    background-color: #fff;
    margin: 0 auto
  } */

/*````````````````````````  */
  .content {
    width: 100%;
  }
  .el-row {
    width: 100%;
    /* margin-bottom: 20px; */
    margin: 0px 0px 20px !important
  }
  .el-row:last-child {
      margin-bottom: 0;
    }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-row .el-col div:first-child,
  .el-row .el-col div:nth-child(2),
  .el-row .el-col div:nth-child(3),
  .el-row .el-col div:nth-child(4) {
    margin-bottom: 20px;
  }
  .grid-content-height {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  @media screen and (min-width: 1200px) {
          .small {
            display: none
          }
        }
  /* @media screen and (min-width: 768px) and (max-width: 992px) {

        } */
   @media screen and (max-width: 1200px) {
           .big {
             display: none
          }
        }
   .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

 .el-container {
    margin-bottom: 40px;
    height: 500px !important
  }

</style>
