<template>
<form id="form" @submit.prevent>
    <input 
    v-model="email"
    @input="event => email = event.target.value"
    type="email" 
    placeholder="email"/>
    <input 
    v-model="pass"
    @input="event => pass = event.target.value"
    type="password" 
    placeholder="password"/>
    <button
    @click="handleClick"
    >
        {{title}}
    </button>
</form>
</template>

<script>
    export default {
        data () {
            return {
                email:'',
                pass:''
            }
        },
        props:{
            title: {
                type:String,
                required:true
            },
            handleClick: {
                type:Function,
                default:() => {
                  
                }
            }

        },
       
       
    }

</script>

<style scoped>
    #form {
        display:flex;
        flex-direction: column;
        gap:10px;
    }
    #form input {
        font-size: 22px;
        padding:5px;
    }

    #form button {
        font-size:20px;
        padding:3px;
        cursor: pointer;
        align-self: center;
    }

</style>