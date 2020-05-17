<template>
  <div class="add-card">
    <form @submit.prevent="">
      <input class="form-control" v-model="inputTitle" type="text" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput" @click="onSubmit()">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent.stop="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
   props: ['listId'],
   data() {
      return {
         inputTitle: ''
      }
   },
   computed: {
      invalidInput() {
         return !this.inputTitle.trim()
      }
   },
   methods: {
      ...mapActions([
         'ADD_CARD'
      ]),
      onSubmit() {
         if(!this.inputTitle) return
         console.log('223')
         const {inputTitle, listId} = this
         this.ADD_CARD({
            title: inputTitle,
            listId
         }).finally(() => {
            this.inputTitle = ''
         })
      },
      setupClickOutside(el) {
         document.querySelector('body').addEventListener('click', (e) => {
            if(el.contains(e.target)) return
            this.$emit('close')
            
         })
      },
      
   },
   mounted() {
      this.$refs.inputText.focus()
      this.setupClickOutside(this.$el)
   }
}
</script>

<style>
.add-card {
  padding: 10px;
  display: block;
  position: relative;
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
