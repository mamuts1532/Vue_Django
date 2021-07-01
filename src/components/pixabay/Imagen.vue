<template>
    <div>
        <b-img :id="img.id" :src="img.previewURL" thumbnail fluid rounded
            v-b-popover.hover.top="img.tags" title="Popover Title: Etiqueta"
            @click="mostrarModal=true"
        ></b-img>

        <!-- <b-modal :ref="img.id" hide-footer size="x1" :title="img.tags">
            <div class="d-block text-center">
                <b-img-lazy top :id="img.id" :src="img.largeImageURL" :alt="img.tags" fluid rounded v-b-popover.focus="img.tags"></b-img-lazy>
            </div>
        </b-modal> -->
        <ShowModal :mostrarModal="mostrarModal" :img="img"/>
    </div>
</template>

<script>

import ShowModal from "./Showmodal"

export default {
    name:"Imagen",
    props:["img"],
    components:{
        ShowModal,
        },
    
    methods: {
        showModal(){
            this.$refs[this.img.id].show();
        }
    },
    data(){
        return{
            mostrarModal:false
        }
    }

}
</script>

<style lang="stylus" scoped>

</style>