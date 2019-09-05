<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container fluid>

      <v-flex xs12 sm8 md4 offset-md4>
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            src="https://images.alphacoders.com/881/881287.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">SignUp</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text>





              <v-text-field
                v-model="username"

                :counter="20"
                label="Name"
                data-vv-name="name"
                required
              ></v-text-field>






              <v-text-field
                type="password"
                v-model="password"
                label="Password"
                data-vv-name="password"
                required
              ></v-text-field>

              <v-btn  @click="submit" color="success" text>submit</v-btn>






          </v-card-text>

        </v-card>
      </v-flex>


  </v-container>


</template>

<script>
    export default {
      name: "RegisterComponent",
      data(){
        return{
          username:"",
          password:""
        }
      },
      methods:{
        submit2(){
          let vm = this
        },
        submit(){
          let vm = this
          this.$http.post("/api/user/register",{
            "password":this.password,
            "username":this.username
          }).then(res=>{

            alert("Success!")
            console.log(res)

          },e=>{
            console.log(e)
            alert("Ошибка!" + e.response.data.message)
          })
        }

      }
    }
</script>

<style scoped>

</style>
