<template>

    <b-container>
        <b-row>
            <b-col>
                <h1>Bienvenidos al Curso Vue + Django <small>x Daniel Bojorge</small></h1>
                <img src="../assets/vue+django.png" alt="" width="100%" height="auto">
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="red in redes" :key="red.red" class="text-center">
                <b-link :href="red.url" target="_blank">
                    
                    <b-alert :variant="red.color" show>
                        {{ red.red }}
                    </b-alert>
                </b-link>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>


export default {
  name: 'Home',
  data(){
      return{
          redes:[
                {
                    red:"FB/DEBSConsultores", 
                    url:"https://www.google.com/",
                    color:"info"
                },
                {
                    red:"TW/DEBSConsultores",  
                    url:"https://www.google.com/",
                    color:"warning"
                },
                {
                    red:"YT/DEBSDaniel103",  
                    url:"https://www.google.com/",
                    color: "danger"
                }
          ]
      }
  }

}
</script>

<style lang="stylus" scoped>

</style>
