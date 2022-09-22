<template>
    <div>
            <UserForm title="Girish" :handleClick="handleLogin"/>
    </div>

</template>

<script>
import UserForm from './UserForm.vue';
export default  {
    components:{
        UserForm
    },
    data() {
        return {
            
        }
    },
    methods:{
        handleLogin (email) {
            console.log('yes login handlelogin', email)
        }
    }
}

</script>

<style>
    
</style>