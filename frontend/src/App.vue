<template>
<div class="container__app">
  <h1>APP CREATE USERS</h1>
  <Form  v-if="isRouterAlive"/> 
  <Cards v-if="isRouterAlive" />
</div>

</template>
<script>import Cards from './Components/Cards.vue'
import Form from './Components/Form.vue';


export default {
  components: {
    Cards,
    Form
},

provide(){
  return{
    reload: this.reload,
  }
},

data(){
  return{
    isRouterAlive: true,
  }
},

methods:{
 reload(){
   this.isRouterAlive = false
   this.$nextTick(function(){
     this.isRouterAlive = true
   })
 },

}



};
</script>




<style>
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}



.container__app{
  background: linear-gradient(45deg, #ffaf00 , #bb02ff);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

h1
{
  margin: 2rem 0;
  text-shadow: 3px 4px 10px #fff;
}

</style>
