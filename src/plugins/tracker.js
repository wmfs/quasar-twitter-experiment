
class Tracker {
  constructor () {
  }

  stackReset () {
    console.log('STACK RESET')
    this.stack = []
  }
}

export default ({ app, Vue }) => {
  Vue.prototype.$tracker = new Tracker()
}
