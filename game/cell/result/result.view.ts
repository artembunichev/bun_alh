namespace $.$$ {

	export class $bun_alh_game_cell_result extends $.$bun_alh_game_cell_result {

		@ $mol_mem
		hint() {
			return this.useless()
				? 'Вы уже изучили этот элемент'
				: this.element_name()
		}

	}

}
