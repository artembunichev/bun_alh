namespace $.$$ {

	export class $bun_alh_game_page extends $.$bun_alh_game_page {

		@ $mol_mem
		elements() {
			return this.model().element_ids_known().map( id => this.Element_cell( id ) )
		}

		@ $mol_mem_key
		element_id( id: string ) {
			return id
		}

		@ $mol_mem_key
		element_icon( id: string | null ) {
			if ( id === null ) return ''
			return this.model().element_icon( id )
		}

		@ $mol_mem_key
		element_name( id: string ) {
			return this.model().element_name( id )
		}

		@ $mol_mem
		current_dragged( next?: string | null ) {
			if ( next === undefined ) return null
			if ( next === null ) return null
			if ( this.model().element( next ) !== null ) {
				return next
			}
			return null
		}

		@ $mol_mem
		synth_list( next?: $bun_alh_game_synth_list ) {
			return this.model().synth_list( next )
		}

		@ $mol_mem_key
		synth_element_id( ord: number ) {
			return this.synth_list()[ ord ]
		}

		@ $mol_mem
		synth_element_icon_1() {
			return this.element_icon( this.synth_element_id( 0 ) )
		}

		@ $mol_mem
		synth_element_icon_2() {
			return this.element_icon( this.synth_element_id( 1 ) )
		}

	}

}
