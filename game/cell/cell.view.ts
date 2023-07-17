namespace $.$$ {

	export class $bun_alh_game_cell extends $.$bun_alh_game_cell {

		@ $mol_mem
		size() {
			return this.element_size() + 30
		}

		@ $mol_mem
		sub() {
			return [
				... this.element_icon() ? [ this.Element_icon() ] : [],
			]
		}

	}

}
