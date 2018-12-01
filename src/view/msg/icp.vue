<style lang="less">
@import "./msg.less";
</style>

<template>

<div class="icp">
    <div class="i-title">
          <h3>许可证信息</h3>
          <div class="i-input">
               <Input search enter-button size="large" @on-enter="geticpovalue" v-model="icpvalue" placeholder="滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息" />
          </div>
          <Divider solide />
    </div>

          <Content>
               <Table border :columns="columns7" :data="data1"></Table>
          </Content>
        <div style="page">
           <Page :total="totalNum" @on-change="changePage" show-elevator />
        </div>
</div>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns7: [
        {
          title: '公司名称',
          key: 'name',
          width: 160,
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ])
          }
        },
        {
          title: '证书编号',
          key: 'num'
        },
        {
          title: '证书类型',
          key: 'type',
          width: 100
        },
        {
          title: '业务类型',
          key: 'activity',
          width: 230
        },
        {
          title: '颁发时间',
          key: 'atime',
          width: 100
        },
        {
          title: '续期时间',
          key: 'otime',
          width: 100
        },
        {
          title: '证书状态',
          key: 'state',
          width: 100
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                '年检'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                '续期'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                },
                '提醒'
              )
            ])
          }
        }
      ],
      data1: [
        {
          id: '100',
          name: '公司名称',
          num: '证书编号',
          type: '证书类型',
          activity: '业务类型',
          atime: '颁发时间',
          otime: '续期时间',
          state: '证书状态'
        },
        {
          id: '120',
          name: '公司名称',
          num: '证书编号',
          type: '证书类型',
          activity: '业务类型',
          atime: '颁发时间',
          otime: '续期时间',
          state: '证书状态'
        }
      ],
      // 定义page，size totalNum
      page: 0,
      size: 10,
      totalNum: 30,
      icpvalue: ''
    }
  },
  mounted () {
    this.renderData()
  },
  methods: {
    handleSpinCustom () {
      this.$Spin.show({
        render: h => {
          return h('div', [
            h('Icon', {
              class: 'demo-spin-icon-load',
              props: {
                type: 'ios-loading',
                size: 18
              }
            }),
            h('div', 'Loading')
          ])
        }
      })
    },
    renderData () {
      this.handleSpinCustom()
      // 开始loading
      axios({
        methods: 'get',
        url: 'http://localhost:8090/success',
        // 这个是传给后台的页码
        data: {
          page: this.page,
          size: this.size,
          // 判断用户id
          userId: 1
        }
      })
        .then(res => {
          let getdata = res.data
          if (getdata.code && getdata.code === 1) {
            this.data1 = getdata.result
            this.totalNum = Number(getdata.totalNum)
          }
          console.log(getdata)
          // 隐藏load
          this.$Spin.hide()
        })
        .catch(res => {
          this.$Spin.hide()
        })
    },
    changePage (page) {
      // 因为page索引是从0开始的
      this.page = page - 1
      this.renderData()
    },
    geticpovalue () {
      console.log(this.icpvalue)
      axios({
        method: '请求方式',
        url: '请求接口',
        data: {
          // 以对象的形式返回给后台数据
          value: this.icpvalue
        }
      }).then((res) => {
        console.log(res)
      }).catch(() => {

      })
    },
    show (index) {
      this.$Modal.info({
        // title: "User Info",
        content: `请年检`
        // content: `Name：${this.data6[index].name}<br>Age：${
        //   this.data6[index].age
        // }<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data1.splice(index, 1)
    }
  }
}
</script>
