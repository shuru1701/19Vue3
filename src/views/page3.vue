<template>
    <div class="page3">
    <p>3.请介绍一下自己</p>
    <textarea id="submittext" v-model="text"></textarea>
    <br>
    <button @click="doClick1()">提交</button>
    &nbsp;
    <button @click="doClick2()">上一步</button>
    &nbsp;
    <button @click="clear">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page3",
        data(){
            return{
             text:''
            }
        },
        methods:{
            doClick1(){
                this.$store.commit("Detailtext",this.text);
                this.$router.push("/page4");
            },
            doClick2(){
                this.$router.go(-1);
            },
            clear(){
                this.text='';
            }
        }
    }
</script>

<style scoped>
    .page3{ width: 400px; margin: 0 auto;text-align: center}
    textarea{width:400px; height: 200px;}
</style>