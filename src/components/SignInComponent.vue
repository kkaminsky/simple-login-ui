<template>
  <v-container fluid>

    <v-flex xs12 sm8 md4 offset-md4>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://neilpatel.com/wp-content/uploads/2015/10/colors.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline " style="float: right">SignIn</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-text>

          <v-text-field
            v-model="username"
            label="Username"
            data-vv-name="email"
            required
          ></v-text-field>


          <v-text-field
            type="password"
            v-model="password"
            label="Password"
            data-vv-name="password"
            required
          ></v-text-field>





          <div style="text-align: right">
            <v-btn class="mt-5 mr-5" @click="submit" color="success" text>submit</v-btn>
          </div>


        </v-card-text>

      </v-card>
    </v-flex>


  </v-container>


</template>

<script>
  export default {
    name: "SignInComponent",
    data(){
      return{
        username:"",
        password:""
      }
    },
    methods:{
      submit(){
        let vm = this
        this.$http.post("/api/user/login",{
          "username":this.username,
          "password":this.password
        }).then(res=>{


          console.log(res.data)
          localStorage.setItem("username",res.data.username)
          localStorage.setItem("userRole",res.data.userRole)
          localStorage.setItem("signature",res.data.signature)
          setTimeout(()=>{
            vm.$router.push("/usercabinet")
          },500)

        },e=>{
          alert("Ошибка!" + e.response.data.message)
        })
      }

    }
  }
</script>

<style scoped>

</style>
