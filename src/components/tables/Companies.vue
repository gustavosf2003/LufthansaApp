<template>
    <section class="mt-3">
        <b-table
            :data="isEmpty ? {} : flights"
            :striped="true"
            :hoverable="true"
            :mobile-cards="true">
            
            <b-table-column field="id" label="ID" width="40"  numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>
            <b-table-column field="destiny" label="Destino"  v-slot="props">
                {{ props.row.destiny }}
            </b-table-column>
            <b-table-column field="company" label="Empresa"  v-slot="props">
                {{ props.row.company }}
            </b-table-column>
            <b-table-column field="companyCountry" label="País da Empresa"  v-slot="props">
                {{ props.row.companyCountry }}
            </b-table-column>
            <b-table-column field="duration" label="Duração" centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.duration }}
                </span>
            </b-table-column>
            <b-table-column field="scale" label="Escala"  v-slot="props">
                <span>
                    <b-icon
                        v-if="props.row.id !== 'Total'"
                        pack="fas"
                        :icon="props.row.scale === 'sim' ? 'check' : 'venus'">
                    </b-icon>
                </span>
            </b-table-column>
            <b-table-column field="tax" label="Taxa"  v-slot="props">
                {{ props.row.tax }}
            </b-table-column>
            <b-table-column field="price" label="Valor" centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.currency + props.row.price }}
                </span>
            </b-table-column>
            <template #empty>
                <div class="has-text-centered">Parece que você ainda não possui voos criados</div>
            </template>
        </b-table>
        <h1>{{flights}}</h1>
    </section>
</template>

<script>
    export default {
        data() {
            const data = []
            return {
                data,
                isEmpty: false,
                flights: {}
            }
        },
        methods:{
            async getFlights(){
                const req = await fetch("http://localhost:3000/flights")
                const flights = await req.json()
                this.flights = flights
                
            }
        },
        mounted(){
            this.getFlights()
        }
    }
</script>