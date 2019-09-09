<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex md12>
        <v-container fluid >
          <v-layout row >
            <v-flex md8 offset-md2>
              <v-data-table
                :headers="headers"
                :items="data"
                sort-by="calories"
                class="elevation-1"
              >
                <template v-slot:top>
                  <v-toolbar flat color="white">
                    <v-toolbar-title>My USERS</v-toolbar-title>
                    <v-divider
                      class="mx-4"
                      inset
                      vertical
                    ></v-divider>
                    <div class="flex-grow-1"></div>
                  </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(item)"
                  >
                    delete
                  </v-icon>
                </template>
                <template v-slot:no-data>
                  <v-btn color="primary" @click="initialize">update</v-btn>
                </template>
              </v-data-table>
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'id',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'username', value: 'username' },
        { text: 'role', value: 'role' }
      ],
      data: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$http.post("/api/user/all",{
          userCheck:{
            username: localStorage.getItem("username"),
            signature: localStorage.getItem("signature"),
            userRole: localStorage.getItem("userRole")
          }
        }).then(res=>{
          this.data = res.data
        })
      },

      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.data.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.data.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>

</style>
