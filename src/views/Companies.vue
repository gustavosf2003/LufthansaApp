<template>
  <div>
    <Message :msg="this.notification.msg" :status="this.notification.status"/>
    <b-button label="Adicionar voo" class="btn-col" icon-left="plus" size="is-medium" @click="isCardModalActive = true" />
    <b-modal v-model="isCardModalActive" :width="640">
      <form action="" @submit="saveFlight">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Adicionar voo</p>
            <button
              type="button"
              class="delete"
              @click="closeModal"/>
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <b-field label="Aeronave" >
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
            <div >
                <b-field label="Tempo de voo">
                    <b-select placeholder="Selecione" icon="clock" v-model="duration">
                      <option value="00:00">00:00</option>
                      <option value="01:00">01:00</option>
                      <option value="02:00">02:00</option>
                      <option value="03:00">03:00</option>
                      <option value="04:00">04:00</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="11:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </b-select>
                </b-field>

            </div>
            <hr>
            <div class="columns">
              <b-field  required class="column" label="Escala:">
                <b-radio-button v-model="scale" type="is-success is-outlined" native-value="sim">
                  <b-icon icon="check"></b-icon>
                  Sim
                </b-radio-button>
                <b-radio-button v-model="scale" type="is-danger is-outlined" native-value="não">
                  <b-icon icon="close"></b-icon>
                  Não
                </b-radio-button>
              </b-field>
              <b-field label="Motivo" class="column" v-if="scale == 'sim'">
                <b-select placeholder="Tempo de escala" icon="airplane" v-model="reason">
                  <option value="Abastecer a aeronave">Abastecer a aeronave</option>
                  <option value="Troca de aeronave">Troca de aeronave</option>
                  <option value="Troca de companhia">Troca de companhia</option>
                </b-select>
              </b-field>
            </div>
            <div class="columns" v-if="scale == 'sim'">
              <b-field class="column is-three-fifths" label="Lugar">
                <b-input placeholder="ex. Londres" v-model="scalePlace"></b-input>
              </b-field>
              <b-field label="Tempo" class="column">
            <b-select placeholder="Selecione" icon="clock" v-model="scaleTime">
                  <option value="00:00">00:00</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="11:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
            </b-select>
              </b-field>
            </div>
            <hr>
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
                <b-field class="file is-dark" :class="{'has-name': !!file}">
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
              <b-slider :custom-formatter="(val) => val + '%'" :min=1 :step=0.01 :max=2 :tooltip="false" type="is-link" indicator required v-model="tax"></b-slider>
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
    <Companies/>
  </div>
</template>

<script>
import Message from "../components/Message.vue"
import Companies from "../components/tables/Companies.vue"
export default {
  title:"Companies",
  components:{
    Message,
    Companies
  },
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
      reason:'',
      scalePlace:'',
      scaleTime:'',
      duration : new Date().getHours(),
      currency: '',
      file: {},
      price: 0,
      tax: 0,
      flights: {},
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
          reason: this.reason,
          scalePlace: this.scalePlace,
          scaleTime: this.scaleTime,
          currency: this.currency,
          file: this.file.name,
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
        this.notification.msg = `Voo Nº${res.id} criado com sucesso`
        this.closeModal()
        this.notification.status = 0
      }catch{
        this.closeModal()
        this.notification.msg = "OOPS! Ocorreu um erro ao criar o voo"
        this.notification.status = 1
      }
    },
    closeModal(){
      this.isCardModalActive =  false
    }
  },
}
</script>
<style>
.btn-col{
    background-color: #05164D;
    color: #FFF;
}
.btn-col:hover{
    color: #FFF;
}
</style>