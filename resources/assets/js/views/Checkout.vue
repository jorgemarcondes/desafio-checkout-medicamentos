<template>
	<v-card class="elevation-12 header-memed">
		<v-toolbar height="72px">
			<v-toolbar-title>
				<h2 class="title">Dr. Memed</h2>
				<h5 class="caption">Prescrição criada em {{ today }} </h5>
			</v-toolbar-title>
		</v-toolbar>
		<v-card-text>
			<v-list two-line>
				<template v-for="(medicine, index) in medicines">
					<v-list-tile :key="medicine.name" avatar @click="">
						<v-list-tile-avatar>
							<v-icon>receipt</v-icon>
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-sub-title>{{ medicine.amount }} {{ medicine.amount > 1 ? 'Unidades' : 'Unidade'}}</v-list-tile-sub-title>
							<v-list-tile-title class="memed-item">{{ medicine.name }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-divider/>
				</template>
			</v-list>
			<span class="caption">A Prescrição Digital Memed não dispensa a apresentação de sua versão impressa à farmácia. O médico responsável por esta prescrição não possui qualquer tipo de vínculo com os preços e/ou farmácias apresentados.</span>
		</v-card-text>
		<v-card-actions class="big-action">
			<v-btn block color="primary" to="findDrugstore"><span >Encontrar farmácia</span><h6>Servico oferecido por Memed</h6></v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>

  import moment from 'moment';

  export default {
	data() {
	  return {
	    today: moment().format('DD/MM/YYYY'),
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

</style>