<template>
  <div>
    <b-message :type="this.notification.status == 0 ? 'is-success' : 'is-danger'" auto-close v-if="notification.msg">
      {{ notification.msg }}
    </b-message>
    <b-button label="Adicionar voo" type="is-primary" size="is-medium" @click="isCardModalActive = true" />
    <b-modal v-model="isCardModalActive" :width="640">
      <form action="" @submit="saveFlight">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Adicionar voo</p>
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Voo" >
                  <b-input placeholder="ex. A330" required v-model="name"></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field  label="Destino">
                  <b-input placeholder="ex. Oslo" required v-model="destiny"></b-input>
                </b-field>    
              </div>
            </div>
            <div class="columns">
              <b-field class="column" label="Companhia">
                <b-input placeholder="ex. Lufthansa" v-model="company" required></b-input>
              </b-field>
              <b-field class="column" label="País da companhia">
                <b-input placeholder="ex. Alemanha" required v-model="companyCountry"></b-input>
              </b-field>
            </div>
            <div class="columns">
              <b-field horizontal class="column" label="Duração:">
                <b-timepicker required inline icon="clock" v-model="duration"></b-timepicker>
              </b-field>
              <b-field horizontal required class="column mt-2" label="Escala:">
                <b-radio-button v-model="scale" type="is-success is-outlined" native-value="sim">
                  <b-icon icon="check"></b-icon>
                  Sim
                </b-radio-button>
                <b-radio-button v-model="scale" type="is-danger is-outlined" native-value="não">
                  <b-icon icon="close"></b-icon>
                  Não
                </b-radio-button>
              </b-field>
            </div>
            <div class="columns">
              <b-field label="Valor:" class="column">
                <b-select placeholder="Moeda" v-model="currency" required>
                  <option value="$">$</option>
                  <option value="£">£</option>
                  <option value="€">€</option>
                </b-select>
                <b-input type="number" placeholder="0,00" :min=0 :step=0.01 v-model="price" required></b-input>
              </b-field>
              <b-field label="Documento do voo" class="column">
                <b-field class="file is-primary" :class="{'has-name': !!file}">
                  <b-upload v-model="file" class="file-label" rounded>
                    <span class="file-cta">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">{{ file.name || "Click to upload"}}</span>
                    </span>
                  </b-upload>
                </b-field>
              </b-field>
            </div>
            <b-field label="Taxa" class="mx-3">
              <b-slider :custom-formatter="(val) => val + '%'" :min=1 :step=0.01 :max=2 :tooltip="false" indicator required v-model="tax"></b-slider>
            </b-field>
          </section>
          <footer class="modal-card-foot is-justify-content-end">
            <button type="submit" class="button is-link is-outlined" icon="upload">
              Enviar
              <i class="far fa-paper-plane ml-3"></i>
            </button>
          </footer>
        </div>
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
      notification: {
        msg: '',
        status: 0
      },
      name: '',
      company: '',
      companyCountry: '',
      destiny: '',
      origin: 'São Paulo',
      scale: '',
      duration : new Date(),
      currency: '',
      file: {},
      price: 0,
      tax: 0,
    }
  },
  methods:{
    async saveFlight(e){
      try{
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
          file: this.file.name,
          price: this.price,
          tax: this.tax
        };
        const dataJson = JSON.stringify(data)
        const req = await fetch("http://localhost:300/flights",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson
        })
        const res = await req.json()
        this.notification.msg = `Voo Nº${res.id} criado com sucesso`
        this.notification.status = 0
      }catch{
        this.notification.msg = "OOPS! Ocorreu um erro ao criar o voo"
        this.notification.status = 1
      }
    },
  }
}
</script>