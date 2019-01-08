<template>
  <q-page class="q-ma-lg">
    <div>
      <p>@{{user}}</p>
      <h5>{{body}}</h5>
      <pre>{{created}}</pre>
      <hr>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageTweetThread',
    data () {
      return {
        user: '',
        body: '',
        created: ''
      }
    },
    mounted: function () {
      const id = this.$route.params.id
      const tweet = this.$dummy[id]
      this.user = tweet.user
      this.body = tweet.body
      this.created = tweet.created
    }
  }
</script>
