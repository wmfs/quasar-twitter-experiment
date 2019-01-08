<template>
  <q-page class="q-ma-lg">
    <div>
      <h2>Search</h2>
    </div>
    <q-input autofocus v-model="query" stack-label="Search"/>

    <tweet-list :ids="tweetIds"></tweet-list>


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
        tweetIds: ['1', '2']
      }
    },
    mounted: function () {

    }
  }
</script>
