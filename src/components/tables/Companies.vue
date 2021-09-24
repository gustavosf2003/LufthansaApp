<template>
    <section class="mt-3">
        <b-table
            :data="isEmpty ? [] : data"
            :striped="true"
            :hoverable="true"
            :mobile-cards="hasMobileCards">

            <b-table-column field="id" label="ID" width="40" :td-attrs="columnTdAttrs" numeric v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="destiny" label="Destino" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.destiny }}
            </b-table-column>

            <b-table-column field="company" label="Empresa" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.company }}
            </b-table-column>
            <b-table-column field="company" label="País da Empresa" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.companyCountry }}
            </b-table-column>
            <b-table-column field="date" label="Duração" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.duration }}
                </span>
            </b-table-column>
            <b-table-column label="Escala" :td-attrs="columnTdAttrs" v-slot="props">
                <span>
                    <b-icon
                        v-if="props.row.id !== 'Total'"
                        pack="fas"
                        :icon="props.row.escala === 'sim' ? 'check' : 'venus'">
                    </b-icon>
                </span>
            </b-table-column>
            <b-table-column field="company" label="Taxa" :td-attrs="columnTdAttrs" v-slot="props">
                {{ props.row.tax }}
            </b-table-column>
            <b-table-column field="date" label="Valor" :th-attrs="dateThAttrs" :td-attrs="columnTdAttrs" centered v-slot="props">
                <span class="tag is-success">
                    {{ props.row.currency + props.row.price }}
                </span>
            </b-table-column>
            <template #empty>
                <div class="has-text-centered">Parece que você ainda não possui voos criados</div>
            </template>

        </b-table>
    </section>
</template>

<script>
    export default {
        data() {
            const data = [
                { 'id': 1, 'destiny': 'Estocolmo', 'company': 'TAP', 'companyCountry': 'Portugal', 'duration': '2:00', 'escala': 'sim', 'tax': 1.0, 'currency': '$', 'price': '1000' },
            ]
            return {
                data,
                isEmpty: false,
            }
        },
    }
</script>