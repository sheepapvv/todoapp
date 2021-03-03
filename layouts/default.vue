<template>
  <v-app color="primary">
    
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-card-title>pap@todo.app</v-card-title>
      <v-btn color="primary">LOGOUT</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'TODOAPP'
    }
  }
}
</script>