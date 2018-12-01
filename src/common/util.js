export default class util {
  /**
   * 全局loading
   */
  static loadingShow (ctx) {
    ctx.$Spin.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            'class': 'demo-spin-icon-load',
            props: {
              type: 'ios-loading',
              size: 22
            }
          }),
          h('div', 'Loading')
        ])
      }
    })
  }

  static loadingHide (ctx) {
    ctx.$Spin.hide()
  }
}
export {
  util
}
