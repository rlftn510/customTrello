<template>
  <modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control" type="text" :value="card.title" :readonly="!toggleTitle"
          ref="inputTitle" @click="toggleTitle=true" @blur="onBlurTitle">
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea  class="form-control" cols="30" rows="3" placeholder="Add a more detailed description..."
        :readonly="!toggleDescription"
        @click="toggleDescription=true"
        @blur="onBlurDescription"
        ref="inputDescription"
        v-model="card.description"></textarea>
    </div>
    <div slot="footer"></div>
  </modal>  
</template>

<script>
import Modal from './Modal'
import { mapActions, mapState } from 'vuex'
export default {
   data() {
      return {
         toggleTitle: false,
         toggleDescription: false
      }
   },
   components:{
      Modal
   },
   computed: {
      ...mapState({
         card : 'card',
         board : 'board'
      })
   },
   created() {
      this.fetchCard()
   },
   methods : {
      ...mapActions([
         'FETCH_CARD',
         'UPDATE_CARD'
      ]),
      onClose() {
         this.$router.push(`/b/${this.board.id}`)
      },
      fetchCard() {
         const id = this.$route.params.cid
         this.FETCH_CARD({id})
      },
      onBlurTitle() {
         this.toggleTitle = false;
         const title = this.$refs.inputTitle.value.trim()
         if(!title) return
         this.UPDATE_CARD({id: this.card.id, title}).then(() => {
            this.fetchCard()
         })
      },
      onBlurDescription() {
         this.toggleDescription = false;
         const description = this.$refs.inputDescription.value.trim()
         console.log(description)
         if(!description) return;
         this.UPDATE_CARD({id: this.card.id, description}).then(() => {
            this.fetchCard()
         })
      }
   }
}
</script>

<style>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;  
}
.modal-close-btn {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>

