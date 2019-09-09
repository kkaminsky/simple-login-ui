<template>
  <div>
    <v-container fluid grid-list-md>
      <v-flex  class="headline my-4" style="text-align: center">
        <p>Hello  {{" " + username}}  !
        </p>
      </v-flex>
    </v-container>
    <admin-component v-if="admin"></admin-component>
  </div>

</template>

<script>
  import AdminComponent from '../components/AdminComponent'
    export default {
        name: "UserCabinet",
      components:{
          AdminComponent
      },
      computed:{
        username(){
          return localStorage.getItem("username")
        },
        admin(){
          return localStorage.getItem("userRole")==="ROLE_ADMIN"
        }
      }

    }
</script>

<style scoped>

</style>
