<template>
  <div class="about p-d-block">
    <h1>This is an about page</h1>
    <div class="p-d-flex p-jc-center">
  <span class="p-float-label">
    <InputText type="text" id="name" v-model="name"/>
    <label for="name">Name</label>
  </span>
      <span class="p-float-label">
    <InputText type="text" id="vorname" v-model="vorname"/>
    <label for="vorname">Vorname</label>
  </span>
    </div>
    <Calendar v-model="date" :inline="true"></Calendar>
  </div>
  <Button>Click</Button>
</template>
<script>
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default {
  data() {
    return {
      name: '',
      vorname: '',
      date: null
    }
  },
  components: {
    'Calendar': Calendar,
    'InputText': InputText,
    'Button': Button
  }
}
</script>