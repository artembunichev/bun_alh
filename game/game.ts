namespace $ {

	export class $bun_alh_game extends $mol_object {

		element_list(): Array< $bun_alh_game_element > {
			return []
		}

		@ $mol_mem_key
		element( id: string ) {
			return this.element_list().find( ( el )=> el.id === id )!
		}

		@ $mol_mem_key
		element_icon( id: string ) {
			return `bun/alh/icons/${ id }.png`
		}

		@ $mol_mem_key
		element_name( id: string ) {
			return this.element( id ).name
		}

		@ $mol_mem
		element_ids_known( next?: Array< string > ) {
			return next ?? []
		}

	}

}
