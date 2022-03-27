<template>
    <form ref="anyName" id="app" v-on:submit.prevent="submitForm">
    <div class="input-name">
      <label class="label-name" for="name">Nombre</label>
      <input id="name" type="text" v-model="form.name" required />
    </div>

    <div class="sections">
      <select v-model="form.sex" required>
        <option value="women">female</option>
        <option value="men">male</option>
      </select>
      <select v-model="form.occupation" required >
        <option value></option>
        <option value="Médico">Médico</option>
        <option value="Veterinario">Veterinario</option>
        <option value="Arquitecto">Arquitecto</option>
        <option value="Abogado">Abogado</option>
        <option value="Pescador">Pescador</option>
        <option value="Soldador">Soldador</option>
        <option value="Carnicero">Carnicero</option>
        <option value="Matemático">Matemático</option>
        <option value="Electricista">Electricista</option>
        <option value="Contador">Contador</option>
        <option value="Biólogo">Biólogo</option>
        <option value="Sastre">Sastre</option>
      </select>
    </div>
      <div class="button" @click="randomNum" >Random Number</div>
    <div class="container-numero">
      <input id="name" type="number" v-model="form.randomNumber" min="1" style="display:none"/>
      <div class="numero__random">{{form.randomNumber}}</div>
    </div>
    <input class="submit" type="submit" value="Enviar" />
  </form>

</template>

<script>
import userServices from '../services/userServices';

export default {
  inject: ['reload'],
  data() {
    return {
      form:{
          name: null,
          sex: null,
          occupation: null,
          randomNumber: 0,
          data: Date()
      },
  }
  
},
    props: {
         numberDef : {
            type: Number,
            default: 35
        },
    },
  methods: {

randomNum(){
      this.form.randomNumber =  Math.floor(Math.random() * (99 - 1 + 1) + 1)
    },

  submitForm(){
 userServices.postUser(this.form).then(res =>{
   if (res.data.redirect == '/add'){
     window.location = "/"

   }})
   /* Para resetear el formulario */
   setTimeout(()=>
    {
    this.$refs.anyName.reset();
    this.reload()
    }, 1000)
   }



  },

}
</script>

<style>
form 
{
display: grid;
place-content: center;
width: 90%;
max-width: 1000px;
min-width: 300px;
border: 2px solid black;
padding: 2rem;
}

input
{
  border-radius: 2px ;
  height: 25px;
}

.submit
{
font-size: 18px;
border-radius: 16px;
height: 32px;
margin-top: 16px;
}


.input-name
{
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
}

.label-name
{
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  text-shadow: 3px 3px 9px #000;
  margin-bottom: 12px;
}

.button
{
  padding: 8px 18px;
  background-color: #000;
  color: #fff;
  border-radius: 40px;
  font-size: 16px;
  margin-top: 2rem;
  border: 2px solid #fff;
  cursor: pointer;
  text-align: center;
}

.container-numero
{
  margin: 1rem 0;
  display: grid;
  place-content: center;
}

.numero__random
{
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  text-align: center;
  box-shadow: 2px 3px 16px black;
}

.sections
{
  display: flex;
  justify-content: space-around;
}


</style>