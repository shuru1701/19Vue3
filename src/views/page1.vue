<template>
    <div class="page1">
        <p>1.请问您的性别是:</p>
        <input type="radio" value="男" v-model="sex">男
        <input type="radio"value="女" v-model="sex">女
        <input type="radio" value="保密" v-model="sex">保密
        <br>
        <button @click="doClick()">下一步</button>
        &nbsp;
        <button @click="reset">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page1",
        data(){
          return{
              sex:'保密'
          }
        },
        methods:{
            doClick(){
                this.$store.commit("SexSelect",this.sex);
                this.$router.push('/page2');
            },
            reset(){
                this.sex="保密";
            }
        }
    }
</script>

<style scoped>
.page1{ width: 400px; margin: 0 auto;text-align: center}
</style>