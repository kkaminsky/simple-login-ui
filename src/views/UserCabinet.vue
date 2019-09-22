<template>
  <div>
    <v-container fluid grid-list-md>
      <v-flex  class="headline my-4" style="text-align: center">
        <p>Hello  {{" " + username}}  !
        </p>
      </v-flex>
    </v-container>
    <admin-component v-if="admin"></admin-component>
    <file-component></file-component>
  </div>

</template>

<script>
  import AdminComponent from '../components/AdminComponent'
  import FileComponent from  '../components/FileComponent'
    export default {
        name: "UserCabinet",
      components:{
        FileComponent,
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
