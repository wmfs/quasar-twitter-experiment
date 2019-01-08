<template>
 <div class="q-ma-xl">
   <q-card class="q-mb-lg" v-for="tweet in tweets" :key="tweet.id" @click.native="showTweet(tweet.id)">
     <q-card-main>@{{tweet.user}}</q-card-main>
     <q-card-separator />
     <q-card-title>
       {{tweet.body}}
     </q-card-title>
   </q-card>
 </div>
</template>

<style>
</style>

<script>
export default {
  name: 'TweetList',
  props: [
    'ids'
  ],
  data () {
    const tweets = []
        this.ids.forEach((id) => {
        const tweet = this.$dummy[id]
        tweets.push(
          {
            id: id,
            user: tweet.user,
            body: tweet.body
          }
        )
      }
    )
    return {
      tweets: tweets
    }
  },
  methods: {
    showTweet(id) {
      this.$router.push(
        {
          name: 'thread',
          params: {
            id: id
          }
        }
      )
    }
  }
}
</script>
