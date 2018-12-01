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
          <h3>许可证信息</h3>
          <div class="i-input">
               <Input search enter-button size="large"  placeholder="滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息" />
          </div>
          <Divider solide />
    </div>

          <Content>
               <Table border :columns="columns7" :data="data6"></Table>
          </Content>
        <div style="page">
           <Page :total="100" show-elevator />
        </div>
</div>

</template>
<script>
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
          key: 'Atime',
          width: 100
        },
        {
          title: '续期时间',
          key: 'Otime',
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
      data6: [
        {
          id: '100',
          name: '公司名称',
          num: '证书编号',
          type: '证书类型',
          activity: '业务类型',
          Atime: '颁发时间',
          Otime: '续期时间',
          state: '证书状态'
        },
        {
          id: '120',
          name: '公司名称',
          num: '证书编号',
          type: '证书类型',
          activity: '业务类型',
          Atime: '颁发时间',
          Otime: '续期时间',
          state: '证书状态'
        }
      ]
    }
  },
  methods: {
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
      this.data6.splice(index, 1)
    }
  }
}
</script>
