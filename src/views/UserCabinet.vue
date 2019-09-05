<template>
  <v-container fluid grid-list-md>
    <v-flex  class="headline my-4" style="text-align: center">
      <p>Hello  {{" " + username}}  !
      </p>
    </v-flex>
  </v-container>
</template>

<script>
    export default {
        name: "UserCabinet",
      computed:{
        username(){
          return localStorage.getItem("username")
        }
      }

    }
</script>

<style scoped>

</style>
