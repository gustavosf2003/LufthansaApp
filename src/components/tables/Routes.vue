<template>
    <section class="mt-3">
        <div class="table-container">
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
    export default {
        data() {
            return {
                isEmpty: false,
                flights: {},
                isCardModalActive: false
            }
        },
        methods:{
            async getFlights(){
                const req = await fetch("http://localhost:3000/flights")
                const flights = await req.json()
                this.flights = flights
            },
            // async deleteFlight(id){
            //     const req = await fetch(`http://localhost:3000/flights/${id}`,{
            //         method: 'DELETE'
            //     });
            //     // const data = await req.json()
            //     // this.getFlights()
            // }
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
</style>