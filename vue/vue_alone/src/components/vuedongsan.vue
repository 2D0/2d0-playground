<template>

  <div class="header">
    <a href="#">{{ headTit }}</a>
  </div>

</template>

<script>
export default {
  name: 'vueAlone',
  date(){
    return {
      headTit : ['Home', 'Shop', 'About']




    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    background:#999;
  }
  .header a{

  }
</style>
