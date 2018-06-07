<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: false,
        medicines: [
          { name: 'Ácido zoledrônico 4mg', amount: 1 },
          { name: 'Água para injeção 1mL', amount: 1 },
          { name: 'Bromazepam 3mg', amount: 1 },
        ]
      }
    },
  }
</script>

<style lang="css">
    .header-memed .btn {
        height: 54px !important;
    }

    .header-memed .title {
        margin: 0 !important;
    }

    .header-memed .subtitle {
        margin: 0 !important;
    }

    .header-memed .big-action .btn__content {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .memed-item {
        font-weight: bold;
    }

    .memed-price {
        color: #00b8d4 !important;
        font-weight: bold;
        font-size: 16px;
    }

</style>