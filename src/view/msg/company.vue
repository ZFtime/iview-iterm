<style>
.c-titile h3 {
  width: 100px;
  line-height: 53px;
  float: left;
}
.c-right {
  width: 668px;
  float: right;
  line-height: 37px;
}
.c-input {
  float: left;
  width: 586px;
}
.c-btn {
  float: right;
}
.F-input{
  height: 50px;
  line-height: 30px;
}
.F-input label{
  float: left;
  text-align: right;
  width: 10%;
}
.F-input .ivu-input-wrapper{
  float: left;
  width: 86%;
}
.ivu-page{
  float: right;
  padding: 10px 0px;
}

</style>

<template>
    <div>
        <div class="c-titile">
            <h3>我的公司</h3>
            <div class="c-right">
                <div class="c-input">
                   <Input search enter-button size="large"  placeholder="滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息滚动信息" />
                </div>
               <div class="c-btn">
                   <Button @click="modal = true">添加公司</Button>
                  <Modal
                    v-model="modal"
                    class-name="vertical-center-modal">
                    <Form:get ref="formValidate" :model="formValidate">
                      <div class="F-input">
                        <Label>公司名：</Label>
                         <i-input v-model="name" placeholder="请输入公司名" ></i-input>
                      </div>
                       <div  class="F-input">
                        <Label>邮箱： </Label>
                        <i-input v-model="mail" placeholder="请输入邮箱"></i-input>
                      </div>

                    </Form:get>
                </Modal>
               </div>
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
                      this.remove(params.index)
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
                      this.remove(params.index)
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
      ],
      modal: false
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
    // ok() {
    //   this.$Message.info("Clicked me");
    // },
    // cancel() {
    //   this.$Message.info("Clicked cancel");
    // }
  }
}
</script>
