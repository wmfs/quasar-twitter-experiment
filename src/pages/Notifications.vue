<template>
  <q-page class="q-ma-lg">
    <div>
      <h2>Notifications</h2>
      <tweet-list :ids="tweetIds"></tweet-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  import TweetList from '../components/Tweet-list'

  export default {
    name: 'PageIndex',
    components: {TweetList},
    data () {
      return {
        query: '',
        tweetIds: ['3']
      }
    },
    mounted: function () {
    }
  }
</script>
