export default ({ app, Vue }) => {
  Vue.prototype.$dummy = {
    '1': {
      user: 'tymlyJS',
      created: '2019-01-08T14:01:04.492Z',
      body: 'I like kebabs.'
    },
    '2': {
      user: 'tymlyJS',
      created: '2019-01-08T14:01:06.492Z',
      body: 'Kebabs FTW'
    },
    '3': {
      user: 'tymlyJS',
      created: '2019-01-08T16:01:04.492Z',
      body: 'KEEEBABS!!!'
    }
  }
}
