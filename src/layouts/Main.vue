<template>
  <q-layout>
    <q-layout-header>

      <q-toolbar color="white">
        <!--
          For Toolbar title, we use
          QToolbarTitle component
        -->

        <!--
          In a Toolbar, buttons are best
          configured as "flat, round, dense" and with an icon,
          but any button will do
        -->
        <div style="margin:auto">
          <q-btn :color="routeName==='home'?'primary':'grey'" flat size="lg" round icon="home" to="home"/>
          <q-btn :color="routeName==='search'?'primary':'grey'" flat size="lg" round icon="search" to="search"/>
          <q-btn :color="routeName==='notifications'?'primary':'grey'" flat size="lg" round icon="notifications"
                 to="notifications"/>
        </div>
      </q-toolbar>


    </q-layout-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { openURL } from 'quasar'

  export default {
    name: 'MyLayout',

    computed: {
      routeName: function () {
        return this.$route.name
      }
    },

    data () {
      return {}
    },
    methods: {
      openURL
    }
  }
</script>

<style>
</style>
