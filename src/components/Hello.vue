<template>
  <div class="hello bg-white">
    <div class='enter'>
      <router-link  :to="{path:'/main'}">Enter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    text-align: center;

  }
  .enter {
    background: url(../assets/img/disney.png) no-repeat;
    width: 1000px;
    height: 800px;
    
  }

</style>
