<template>
  <div>
    <section class="columns ml-3 mt-4">
      <h1 class="page-title">Criar novas rotas</h1>
      <b-button label="Adicionar voo" class="btn-outlined ml-5" icon-left="plus" size="is-medium" @click="isCardModalActive = true" />
    </section>
    <Message :msg="notification.msg" :status="notification.status"/>
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
                <b-field type="is-dark" label="Tempo de voo">
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
              <b-field label="Motivo" type="is-dark" class="column no-border" v-if="scale == 'sim'">
                <b-select placeholder="Tempo de escala" class="no-border" icon="airplane" v-model="reason">
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
              <b-field label="Tempo" type="is-dark" class="column">
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
                <b-field class="file" :class="{'has-name': !!file}">
                  <b-upload hoovered v-model="file" class="file-label" rounded>
                    <span class="file-cta btn">
                      <b-icon class="file-icon" icon="upload"></b-icon>
                      <span class="file-label">{{ file.name || "Fazer upload"}}</span>
                    </span>
                  </b-upload>
                </b-field>
              </b-field>
            </div>
            <b-field label="Taxa" class="mx-3">
              <b-slider :custom-formatter="(val) => val + '%'" :min=1 :step=0.01 :max=2 :tooltip="false" class="slider" indicator required v-model="tax"></b-slider>
            </b-field>
          </section>
          <footer class="modal-card-foot is-justify-content-end">
            <button type="submit" class="button btn-outlined" icon="upload">
              Enviar
              <i class="far fa-paper-plane ml-3"></i>
            </button>
          </footer>
        </div>
      </form>
    </b-modal>
    <section class="mt-3 aaa">
        <div class="table-container" v-if="flights.length > 0">
            <table class="table is-striped is-hoverable is-fullwidth" >
            <thead>
                <tr>
                <th>ID</th>
                <th>Avião</th>
                <th>Destino</th>
                <th>Companhia</th>
                <th>Sede</th>
                <th>Duração</th>
                <th>Escala</th>
                <th>Valor</th>
                <th>Taxa</th>
                <th>Apagar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="f in flights" :key="f.id">
                <th>{{ f.id  }}</th>
                <td class="is-uppercase">{{ f.name  }}</td>
                <td class="is-capitalized">{{ f.destiny  }}</td>
                <td class="is-capitalized">{{ f.company  }}</td>
                <td class="is-capitalized">{{ f.companyCountry  }}</td>
                <td>
                    <span class="tag label">{{ f.duration}} h</span>
                </td>
                <td>
                    <span>
                        <b-tooltip type="is-warning" :label="`${f.scaleTime}h (${f.scalePlace}) - ${f.reason}`" position="is-top">
                            <b-icon
                                pack="fas"
                                :icon="f.scale === 'sim' ? 'check' : 'times'">
                            </b-icon>
                        </b-tooltip>
                    </span>
                </td>
                <td>
                    <span class="tag label">{{ f.currency + ' ' +  f.price }}</span>
                </td>
                <td>{{ f.tax  }}</td>
                <td>
                    <button @click="deleteFlight(f.id)" class="button is-danger is-outlined is-small">
                        <span class="icon is-small">
                        <i class="fas fa-times"></i>
                        </span>
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </section>
    <Emptybox title="Ainda não possui nenhuma rota." subtitle="Adicione uma a qualquer momento" v-if="flights.length == 0"/>
  </div>
</template>

<script>
import Message from "../components/Message.vue"
import Emptybox from "../components/Emptybox.vue"

export default {
  title:"Routes",
  components:{
    Message,
    Emptybox
  },
  data() {
    return {
      isCardModalActive: false,
      addFlight:0,
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
      isEmpty: false,
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
        this.name = '',
        this.company = '',
        this.companyCountry = '',
        this.origin = '',
        this.destiny = '',
        this.duration = '',
        this.scale = '',
        this.reason = '',
        this.scalePlace = '',
        this.scaleTime = '',
        this.currency = '',
        this.file.name = '',
        this.price = '',
        this.tax = '',
        this.closeModal()
        this.notification.status = 0
        this.getFlights()
      }catch{
        this.closeModal()
        this.notification.msg = "OOPS! Ocorreu um erro ao criar o voo"
        this.notification.status = 1
      }
    },
    async getFlights(){
        const req = await fetch("http://localhost:3000/flights")
        const data = await req.json()
        this.flights = data
    },
    async deleteFlight(id){
        try{
            const req = await fetch(`http://localhost:3000/flights/${id}`,{
                method: "DELETE"
            })
            const data = await req.json()
            console.log(data)
            this.getFlights()
            this.notification.msg = `Voo Nº${id} deletado com sucesso`
            this.notification.status = 1
        }catch{
            this.notification.msg = `Oops!!  Erro ao apagar rota de voo`
            this.notification.status = 1
        }
    },
    closeModal(){
      this.isCardModalActive =  false
    }
  },
  mounted(){
      this.getFlights()
  }
}
</script>
<style scoped>
.btn-outlined:hover{
    background-color: #05164D;
    color: #FFF;
}
.btn:hover{
  color: #FFF;
  background-color: #05164D;
}
.btn{
  color: #FFF;
  background-color: #05164D;
}
td,th{
    text-align: center !important;
}
.label{
    background-color: #05164D;
    color: #FFF;
}
.label:hover{
    color: #FFF;
}

</style>