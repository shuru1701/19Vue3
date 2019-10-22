<template>
    <div>
     <p>您的性别是:{{this.$store.state.sex}}</p>
     <p>您的爱好是:{{this.$store.state.checkboxdata.join("")}}</p>
     <p>个人介绍:{{this.$store.state.text}}</p>
    </div>
</template>

<script>
    export default {
        name: "page4"
    }
</script>

<style scoped>

</style>