<template>
    <div class="page2">
        <p>请选择您的兴趣爱好</p>
        <br>
        <input type="checkbox" v-model="checkboxdata" value="看书">看书
        <input type="checkbox" v-model="checkboxdata" value="游泳">游泳
        <input type="checkbox" v-model="checkboxdata" value="跑步">跑步
        <input type="checkbox" v-model="checkboxdata" value="看电影">看电影
        <input type="checkbox" v-model="checkboxdata" value="听音乐">听音乐
        <input type="checkbox" v-model="checkboxdata" value="动漫">动漫
        <br>
        <button @click="doClick1()">下一步</button>
        &nbsp;
        <button @click="doClick2()">上一步</button>
        &nbsp;
        <button @click="clear">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data(){
          return{
              checkboxdata:[]
          }
        },
        methods:{
            doClick1(){
                this.$store.commit("checkHobby",this.checkboxdata);
                this.$router.push('/page3');
            },
            doClick2(){
                this.$router.go(-1);
            },
            clear(){
                this.checkboxdata=[]
            }
        }
    }
</script>

<style scoped>
    .page2{ width: 400px; margin: 0 auto;text-align: center}
</style>