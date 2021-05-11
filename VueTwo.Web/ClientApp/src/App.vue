<template>
  <TabMenu :model="items"/>
  <router-view/>
</template>
<script>
export default {
  data(){
    return {
      items: [
        {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
        {label: 'Chart', icon: 'pi pi-fw pi-chart-line', to: '/chart'},
        {label: 'About', icon: 'pi pi-fw pi-question', to: '/about'}
      ]
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

#app {
  font-family: 'Itim';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
