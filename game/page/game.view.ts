namespace $.$$ {

	export class $bun_alh_game_page extends $.$bun_alh_game_page {

		@ $mol_mem
		elements() {
			return this.model().element_ids_known().map( id => this.Element( id ) )
		}

		@ $mol_mem_key
		element_icon( id: string ) {
			return this.model().element_icon( id )
		}

		@ $mol_mem_key
		element_name( id: string ) {
			return this.model().element_name( id )
		}


	}

}
