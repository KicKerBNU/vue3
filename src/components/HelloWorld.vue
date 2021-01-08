<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Composition API</h2>
    <h3>
      Por que utilizar a "composition api"?
    </h3>
    <p>* Quanto maior o componente em Vue 2 ele tende a ficar mais dificil de ler e por consequência mais dificil de mante-lo  </p>
    <p>* Possui desvatagens na re-utilização de codigos dentro do componente. </p>
    <p>* Vue2 possui diversas limitações para o uso do typescript</p>
    
    <h2>Composition Functions</h2>
    <p>Caso desejassemos re-utilizar metodos no Vue 2 teriamos as seguintes opções:</p>
    <p>
      <img alt="Mixins" src="../assets/mixins.png" />
    </p>
    <h4>
      Bom - Podemos organizar por caracteristica
    </h4>
    <h4>
      Mal - Pode ocasionar conflitos de nomenclatura
    </h4>
    <h4>
      Mal - Não fica claro o relacionamento do mixin com o componente caso o tenha.
    </h4>
    <h4>
      Mal - Não é fácilmente re utilizavel em outros componentes.
    </h4>
    <p>
      <img alt="Mixin Factories" src="../assets/factory_mixins.png" />
    </p>
    <h4>
      Bom - Facilmente re-utilizavel 
    </h4>
    <h4>
      Bom - Temos uma visão mais clara como os Mixins interagem com os componentes.
    </h4>
    <h4>
      Mal - Nomes exigem extrema organização e disciplina.
    </h4>
    <h4>
      Mal - Temos adições explicitas de propriedades, que fazem com que olhemos dentro do mixin qual propriedades ele dispoem.
    </h4>
    <h4>
      Mal - Não temos uma instancia em tempo de execução fazendo com que um mixin nao possa ser gerado dinamicamente.
    </h4>
    <p>
      <img alt="Mixin Factories" src="../assets/scoped_slots.png" />
    </p>
    <h4>
      Bom - Resolve os problemas encontrados no Mixins
    </h4>
    <h4>
      Mal - Sua configuração termina no template, esperamos que o template seja focado apenas em o que é renderizado.
    </h4>
    <h4>
      Mal - Aumenta a identação fazendo com que o codigo fique menos legivel.
    </h4>
    <h4>
      Mal - Já que estamos utilizando 3 componentes ao invés de somente um, torna nossa aplicação um pouco menos performática.
    </h4>







    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
