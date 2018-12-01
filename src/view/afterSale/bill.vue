<style>
.ivu-page {
  float: right;
  padding: 20px 0px;
}
.i-title h3 {
  width: 100px;
  line-height: 53px;
  float: left;
}
.i-title .i-input {
  width: 586px;
  float: right;
}
.i-title input {
  width: 100%;
  line-height: 36px;
}
</style>

<template>
<div>
    <div class="i-title">
          <h3>发票信息</h3>
          <div class="i-input">
               <Input search enter-button size="large"  placeholder="动信息滚动信息" />
          </div>
          <Divider solide />
    </div>
</div>

</template>
<script>
import Http from '../../common/networkRequest.js'
import util from '../../common/util.js'
export default {
  data () {
    return {
      page: 0,
      size: 5
    }
  },
  created () {

  },
  mounted () {
    this.showPage()
  },
  methods: {

    showPage () {
      util.loadingShow(this)
      Http.request({
        url: 'http://localhost:9099/success',
        method: 'get',
        data: {
          start: 25,
          count: 25
        }
      }).then((res) => {
        setTimeout(() => {
          util.loadingHide(this)
        }, 1000)
      }).catch((res) => {
        console.log(res)
      })
    }

  }
}
</script>
