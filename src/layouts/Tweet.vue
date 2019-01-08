<template>
  <q-layout>
    <q-layout-header>

      <q-toolbar color="white" text-color="primary">

        <q-btn flat round  icon="arrow_back" @click.native="goBack"/>
        <q-toolbar-title>
          Tweet
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
        <router-view/>
    </q-page-container>

  </q-layout>

</template>

<script>
  export default {
    name: 'TweetLayout',
    data () {
      return {
      }
    },
    mounted: function () {
    },
    methods: {
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
</style>
