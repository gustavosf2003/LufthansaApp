<template>
    <section class="mt-3">
        <b-table :data="flights" :columns="columns" :striped="true" :hoverable="true" :mobile-cards="true"></b-table>
    </section>
</template>

<script>
    export default {
        data() {
            const data = []
            return {
                data,
                isEmpty: false,
                flights: {},
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'destiny',
                        label: 'Destino',
                    },
                    {
                        field: 'company',
                        label: 'Empresa',
                    },
                    {
                        field: 'companyCountry',
                        label: 'Sede',
                        centered: true
                    },
                    {
                        field: 'duration',
                        label: 'Duração',
                        centered: true
                    },
                    {
                        field: 'scale',
                        label: 'Escala',
                    },
                    {
                        field: 'tax',
                        label: 'Taxa',
                        class: 'has-text-link'
                    },
                    {
                        field: 'price',
                        label: 'Valor',
                        centered: true,
                    }
                ]
            }
        },
        methods:{
            async getFlights(){
                const req = await fetch("http://localhost:3000/flights")
                const flights = await req.json()
                this.flights = flights
            }
        },
        props:{
            reload: Number
        },
        mounted(){
            this.getFlights()
            if(reload == 1){
                this.getFlights()
            }
        }
    }
</script>