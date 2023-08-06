namespace $.$$ {

	export class $bun_alh_game_cell_result extends $.$bun_alh_game_cell_result {
		
		@ $mol_mem
		text() {
			var empty_count =
				this.combine_list().filter( elem => elem === null ).length
			
			if( empty_count >= 2 ) {
				return `Нужны ещё ${ empty_count } элемента!`
			}
			else if( empty_count === 1 ) {
				return `Нужен ещё ${ empty_count } элемент!`
			}
			else {
				return 'Ничего...'
			}
		}

		@ $mol_mem
		hint() {
			return this.useless()
				? 'Вы уже изучили этот элемент'
				: this.element_name()
		}

	}

}
