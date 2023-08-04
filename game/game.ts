namespace $ {

	export type $bun_alh_game_combine_list = [ string | null, string | null ]

	export class $bun_alh_game extends $mol_object {

		element_list(): Array< $bun_alh_game_element > {
			return $bun_alh_game_elements
		}

		@ $mol_mem_key
		element( id: string ) {
			return this.element_list().find( ( el )=> el.id === id ) ?? null
		}

		@ $mol_mem_key
		element_icon( id: string ) {
			return `bun/alh/icons/${ id }.svg`
		}

		@ $mol_mem_key
		element_name( id: string ) {
			return this.element( id )?.name ?? ''
		}

		@ $mol_mem
		element_ids_known( next?: Array< string > ) {			
			if( next ) {
				$mol_state_local.value( 'ids_known' , next )	
			}
			
			return next ?? [ 'water', 'fire', 'air', 'earth' ]
		}

		@ $mol_mem
		combine_list( next?: $bun_alh_game_combine_list ) {
			return next ?? [ null, null ]
		}

		@ $mol_mem_key
		combine( ... elements: $bun_alh_game_ings_nullable ) {
			return $bun_alh_game_combine(
				... elements
			)
		}

	}

}
