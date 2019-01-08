<template>
  <q-layout>
    <q-layout-header>

      <q-toolbar color="white">
        <div style="margin:auto">
          <q-btn :color="routeName==='home'?'primary':'grey'" flat size="lg" round icon="home" @click.native="changeRootPage('home')"/>
          <q-btn :color="routeName==='search'?'primary':'grey'" flat size="lg" round icon="search" @click.native="changeRootPage('search')"/>
          <q-btn :color="routeName==='notifications'?'primary':'grey'" flat size="lg" round icon="notifications" @click.native="changeRootPage('notifications')"/>
        </div>
      </q-toolbar>


    </q-layout-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    name: 'MainLayout',

    computed: {
      routeName: function () {
        return this.$route.name
      }
    },

    methods: {
      changeRootPage: function (routeName) {
        this.$router.replace(routeName)
      }
    },

    data () {
      return {}
    }
  }
</script>

<style>
</style>
