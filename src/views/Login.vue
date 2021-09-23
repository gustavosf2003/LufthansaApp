<template>
    <div>
        <b-field label="Usuário">
            <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Senha">
            <b-input v-model="password"></b-input>
        </b-field>
        <b-button type="is-light" @click="login">Login</b-button>
    </div>
</template>

<script>
export default {
    name: "Log in",
    data(){
        return{
            username: "",
            password: "",
            path:0
        }
    },
    methods:{
        login(){
            alert("Login: " + this.username +  "\nSenha: " + this.password)
        }
    }
}
</script>

<style>

</style>