<template>
    <v-card class="elevation-12 header-memed">
        <v-toolbar height="72px">
            <v-btn icon dark :to="{ name: 'checkout' }">
                <v-icon color="grey darken-2">arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>
                <h2 class="title">Encontrar Farmácia</h2>
                <h5 class="caption">Serviço oferecido por Memed</h5>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-card-title>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon>store</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title class="memed-item">{{ drugstore.name }} <span class="memed-total">(a {{ drugstore.distance }} metros)</span></v-list-tile-title>
                        <v-list-tile-sub-title >Total: {{ drugstore.total | currency }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-card-title>
            <v-list three-line>
                <template v-for="(medicine, index) in medicines">
                    <v-list-tile :key="medicine.name" avatar>
                        <v-list-tile-avatar>
                            <v-icon>receipt</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-sub-title>{{ medicine.amount }} {{ medicine.amount > 1 ? 'Unidades' : 'Unidade'}}</v-list-tile-sub-title>
                            <v-list-tile-title class="memed-item">{{ medicine.name }}</v-list-tile-title>
                            <v-list-tile-sub-title class="memed-price">{{ medicine.price | currency }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider/>
                </template>
            </v-list>
            <span class="caption">A Prescrição Digital Memed não dispensa a apresentação de sua versão impressa à farmácia. O médico responsável por esta prescrição não possui qualquer tipo de vínculo com os preços e/ou farmácias apresentados.</span>
        </v-card-text>
    </v-card>
</template>
<script>

  export default {
    data() {
      return {
        drawer: true,
        mini: false,
        medicines: [
          { name: 'Ácido zoledrônico 4mg', amount: 1, price: 65.61 },
          { name: 'Água para injeção 1mL', amount: 1, price: 30.5 },
          { name: 'Bromazepam 3mg', amount: 1, price: 10.5 },
        ],
        drugstore: { name: 'Farmácia do Brasil', distance: 230, total: 106.61 },
      }
    }
  }
</script>

<style lang="css">
    .memed-total {
        font-weight: normal;
    }
</style>