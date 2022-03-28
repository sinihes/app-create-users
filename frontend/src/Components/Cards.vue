<template>
  <div class="container" ref="container__card"   >
<div class="container" v-if="cards.length">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <div class="circle">
        <img :src="`https://randomuser.me/api/portraits/${card.sex}/${card.randomNumber}.jpg`" alt />
      </div>
      <div class="container-description">
        <h2>{{ card.name.toUpperCase() }}</h2>
        <p>{{ card.occupation }}</p>
        <span>{{formatDate(card.date)}}</span>
        <button v-on:click="deleteUserGet(card._id)">Borrar</button>
      </div>
    </div>
    </div>
    <div class="h2_else" v-else ><h2>COMIENZA A CREAR TUS CARTAS, RELLENA EL FORMULARIO.</h2></div>
  </div>
</template>

<script>
import userServices from '../services/userServices'
import moment from 'moment'

export default {
 inject: ['reload'],

  data() {
    return {
      cardsFormat: [],
      cards: [],
    }
  },
  methods: {
    async getUsers() {
      const response = await userServices.getUser()
      this.cards = response.data
    },

    formatDate(value){
      const date = moment(String(value)).format('MM/DD/YYYY hh:mm')
      return date
    },
    deleteUserGet(id){
    userServices.deleteUser(id)
   /* Para resetear el formulario */
    setTimeout(()=>
    {
    this.reload()
    }, 1000)
    }
  },
  created() {
    this.getUsers()
  },

  computed:{

  }

}
</script>

<style>
.container
{
/* position: relative; */
height: 100%;
padding: 20px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
}

.container .card
{
  position: relative; 
  width: 300px;
  height: 420px;
  background-color: #fff;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 1 15px 25px rgba(0,0,0,0.2);
  transition: 0.5s;

}
.container:hover .card
{
  filter: blur(2px);
  transform: scale(0.9);
  opacity: 0.5;
}
.container .card:hover
{
  filter: blur(0px);
  transform: scale(1.1);
  opacity: 1;
}

.h2_else
{
  margin-top: 2rem;
  text-shadow: 1px 2px 10px #fff;
}

@media screen and (min-width: 870px) {
  .h2_else{
    margin-top: 3rem;
  font-size: 30px;
  }

}


.container .card .circle 
{
display: grid;
justify-content: center;
padding: 1rem;
position: relative;
width: 100%;
height: 100%;
background-color: #000;
clip-path: circle(180px at center 0 );
}

.container .card .circle img
{
display: block;
border: 2px solid #fff;
border-radius: 50%;
}

.container-description
{
  position: absolute;
  width: 100%;
  color: #666;
  display: flex;
  flex-direction: column;
  bottom: 20px;
  text-align: center;
}

h2
{
  margin-bottom: 2rem;
  color: #444;
}

p
{
    margin-bottom: 1rem;
    font-weight: 700;
}

button
{
  width: 8rem;
  padding: 8px 18px;
  background-color: #000;
  color: #fff;
  border-radius: 40px;
  font-size: 16px;
  margin-left: auto;
  margin-top: 2rem;
  margin-right: 16px ;
  cursor: pointer;
}

.container .card:nth-child(1) .circle,
.container .card:nth-child(1) .container-description  button
{
  background-color: #ffaf00;
}

.container .card:nth-child(2) .circle,
.container .card:nth-child(2) .container-description  button
{
  background-color: #da2268;
}

.container .card:nth-child(3) .circle,
.container .card:nth-child(3) .container-description  button
{
  background-color: #bb02ff;
}

.container .card:nth-child(4) .circle,
.container .card:nth-child(4) .container-description  button
{
  background-color: #000;
}

.container .card:nth-child(5) .circle,
.container .card:nth-child(5) .container-description  button
{
  background-color: #ffaf00;
}

.container .card:nth-child(6) .circle,
.container .card:nth-child(6) .container-description  button
{
  background-color: #da2268;
}

.container .card:nth-child(7) .circle,
.container .card:nth-child(7) .container-description  button
{
  background-color: #bb02ff;
}

.container .card:nth-child(8) .circle,
.container .card:nth-child(8) .container-description  button
{
  background-color: #000;
}

.container .card:nth-child(9) .circle,
.container .card:nth-child(9) .container-description  button
{
  background-color: #ffaf00;
}

.container .card:nth-child(10) .circle,
.container .card:nth-child(10) .container-description  button
{
  background-color: #da2268;
}

.container .card:nth-child(11) .circle,
.container .card:nth-child(11) .container-description  button
{
  background-color: #bb02ff;
}

.container .card:nth-child(12) .circle,
.container .card:nth-child(12) .container-description  button
{
  background-color: #000;
}

</style>