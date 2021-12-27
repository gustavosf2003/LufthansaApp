<template>
    <section class="mt-3 aaa">
        <Message :msg="this.notification.msg" :status="this.notification.status"/>
        <section class="empty-box" v-if="flights.length == 0">
            <svg viewBox="0 0 64 64" style="width:90px" >
                <path d="M57,2H7C4.243,2,2,4.243,2,7v3v2v37c0,2.757,2.243,5,5,5h15l-1.5,2H14c-0.553,0-1,0.448-1,1c0,2.757,2.243,5,5,5h28 c2.757,0,5-2.243,5-5c0-0.552-0.447-1-1-1h-6.5L42,54h15c2.757,0,5-2.243,5-5V7C62,4.243,59.757,2,57,2z M4,7c0-1.654,1.346-3,3-3 h50c1.654,0,3,1.346,3,3v3H4V7z M60,12v32H4V12H60z M46,60H18c-1.304,0-2.416-0.836-2.829-2H21h22h5.829 C48.416,59.164,47.304,60,46,60z M41,56H23l1.5-2h15L41,56z M57,52H40H24H7c-1.654,0-3-1.346-3-3v-3h56v3C60,50.654,58.654,52,57,52 z"/>
                <path d="M8,31h9v3.434l-4.515,2.709C12.185,37.323,12,37.649,12,38v3c0,0.308,0.142,0.599,0.385,0.788s0.558,0.256,0.857,0.182 L21,40.031l7.758,1.939C28.838,41.99,28.919,42,29,42c0.221,0,0.438-0.073,0.615-0.212C29.858,41.599,30,41.308,30,41v-3 c0-0.351-0.185-0.677-0.485-0.857L25,34.434V31h9c0.553,0,1-0.448,1-1v-3c0-0.409-0.249-0.776-0.629-0.929L25,22.323V18 c0-2.206-1.794-4-4-4s-4,1.794-4,4v4.323l-9.371,3.749C7.249,26.224,7,26.591,7,27v3C7,30.552,7.447,31,8,31z M9,27.677l9.371-3.749 C18.751,23.776,19,23.409,19,23v-5c0-1.103,0.897-2,2-2s2,0.897,2,2v5c0,0.409,0.249,0.776,0.629,0.929L33,27.677V29h-9 c-0.553,0-1,0.448-1,1v5c0,0.351,0.185,0.677,0.485,0.857L28,38.566v1.153l-6.758-1.689C21.163,38.01,21.081,38,21,38 s-0.163,0.01-0.242,0.03L14,39.719v-1.153l4.515-2.709C18.815,35.677,19,35.351,19,35v-5c0-0.552-0.447-1-1-1H9V27.677z"/>
                <rect x="38" y="28" width="19" height="2"/>
                <rect x="38" y="32" width="19" height="2"/>
                <rect x="38" y="36" width="19" height="2"/>
                <rect x="38" y="40" width="19" height="2"/>
                <path d="M38,26h11c0.553,0,1-0.448,1-1v-6h-2v5h-9v-8h5v-2h-6c-0.553,0-1,0.448-1,1v10C37,25.552,37.447,26,38,26z"/>
                <path d="M41.707,18.293l-1.414,1.414l2,2C42.488,21.902,42.744,22,43,22s0.512-0.098,0.707-0.293l6-6l-1.414-1.414L43,19.586 L41.707,18.293z"/>
            </svg>
            <p class="is-size-4 mt-3">Ainda não possui nenhuma rota.</p>
            <p class="is-size-5">Adicione uma a qualquer momento</p>
        </section>
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
</template>

<script>
import Message from "../Message.vue"
    export default {
        components:{
            Message,
        },
        data() {
            return {
                isEmpty: false,
                flights: {},
                isCardModalActive: false,
                notification: {
                    msg: '',
                    status: 0
                },
            }
        },
        methods:{
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
            }
        },
        mounted(){
            this.getFlights()
        }
    }
</script>
<style scoped>
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

.empty-box{
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    height: 20rem;
    border-radius: 5px;
    border-bottom: 2px solid #dbdbdb;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>