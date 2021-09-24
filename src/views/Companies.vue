<template>
  <div>
    <h1>Página de companies</h1>
    <b-button label="Adicionar voo" type="is-primary" size="is-medium" @click="isCardModalActive = true" />
    <b-modal v-model="isCardModalActive" :width="640">
      <form action="" @submit="saveFlight">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Adicionar voo</p>
              <button
                type="button"
                class="delete"
                @click="$emit('close')"/>
          </header>
          <section class="modal-card-body">
            <b-field label="Nome">
              <b-input placeholder="ex. A330" required v-model="name"></b-input>
            </b-field>
            <b-field label="Companhia">
              <b-input placeholder="ex. Lufthansa" v-model="company" required></b-input>
            </b-field>
            <b-field label="País de origem">
              <b-input placeholder="ex. Alemanha" required v-model="companyCountry"></b-input>
            </b-field>
            <b-field label="Destino">
              <b-input placeholder="ex. Oslo" required v-model="destiny"></b-input>
            </b-field>
            <b-field label="Duração">
              <b-timepicker required inline icon="clock" v-model="duration"></b-timepicker>
            </b-field>
            <b-field label="Escala">
              <b-radio v-model="scale" type="is-success" native-value="sim">
                Sim
              </b-radio>
              <b-radio v-model="scale" type="is-danger" native-value="não">
                Não
              </b-radio>
            </b-field>
            <b-field label="Valor">
              <b-select placeholder="Moeda">
                <option value="$">$</option>
                <option value="£">£</option>
                <option value="€">€</option>
              </b-select>
              <b-input type="number" placeholder="0,00" :min=0 :step=0.01 v-model="price"></b-input>
            </b-field>
            <b-field label="Taxa">
              <b-slider :custom-formatter="(val) => val + '%'" :min=1 :step=0.01 :max=2 :tooltip="false" indicator required v-model="tax"></b-slider>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <b-button
                label="Close"
                @click="$emit('close')" />
            <input type="submit" class="button is-link is-outlined" value="Enviar">
          </footer>
        </div>s
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  title:"Companies",
  data() {
    return {
      isCardModalActive: false,
      name: '',
      company: '',
      companyCountry: '',
      destiny: '',
      origin: 'São Paulo',
      scale: '',
      duration : new Date(),
      currency: 0,
      price: 0,
      tax: 0,
    }
  },
  methods:{
    async saveFlight(e){
      e.preventDefault();
      const data = {
        name : this.name,
        company: this.company,
        companyCountry: this.companyCountry,
        origin: this.origin,
        destiny: this.destiny,
        duration: this.duration,
        scale: this.scale,
        currency: this.currency,
        price: this.price,
        tax: this.tax
      };
      const dataJson = JSON.stringify(data)
      const req = await fetch("http://localhost:3000/flights",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      })
      const res = await req.json()
      this.msg = `Voo Nº${res.id} realizado com sucesso`

    }
  }
}
</script>