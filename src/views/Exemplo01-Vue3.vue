<template>
  <h1>Vue 3</h1>
  <h1>Capacidade: {{capacidade}}</h1>
</template>

<script>
import { ref } from "vue";
export default {
    // Executa antes de: Componentes, Props, Data, Metodos, Computed, Lifecycle Metodos
    // Nao tem acesso ao "this"
    // O metodo setup pode utilizar até dois argumentos:
    // props - são reativos e podem ser observadas.
    // context - propriedades antes acessadas pelo this
    setup(){
        const capacidade = ref(3);
        return { capacidade };
    }
}
</script>

<style>

</style>