<template>
    <div id="self">
        <button @click="login">login</button>
        <button @click="status">status</button>
    </div>
</template>

<script>
export default {
    name:'self',
    mounted(){
        
    },
    methods:{
        login(){
            this.$axios.get('http://localhost:3000/login/cellphone?phone=18539807745&password=a9298770426')
            .then((res) => {
                console.log(res)  
                console.log(document.cookie)
            })
        },
        status(){
            this.$axios.get('http://localhost:3000/login/status')
            .then((res) => {
                console.log(res.data)
            })
        }
    }

}
</script>

<style>
    #self {
        position: fixed;
        width: 100%;
        height: 100%;
        font-size: 36px;
        background-color: red;
        margin-top: 42px;
    }
</style>


