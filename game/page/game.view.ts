namespace $.$$ {

	type current_dragged = { id: string; from: string; data: any }

	export class $bun_alh_game_page extends $.$bun_alh_game_page {
		
		auto() {
			this.on_game_open()
		}
		
		@ $mol_action
		on_game_open() {
			
			this.element_ids_known(
				$mol_state_local.value(
					'ids_known'
				)!
			)
			
		}
		
		@ $mol_action
		open_start_page() {
			this.app_page( 'start' )
		}
		
		@ $mol_action
		open_recipes() {
			this.app_page( 'recipes' )
		}

		@ $mol_mem
		element_ids_known( next?: Array< string > ) {
			return this.model().element_ids_known( next )
		}

		@ $mol_mem
		elements() {
			return this.element_ids_known().map( id => this.Element_cell( id ) )
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

		element_size() {
			return 125
		}
		
		@ $mol_mem
		known_elements_sub() {
			return [
				... this.victory() ? [ this.Victory_message() ] : [],
				this.Known_elements_scroll(),
			]
		}

		@ $mol_mem
		current_dragged( next?: current_dragged | null ) {
			if ( next === undefined ) return null
			if ( next === null ) return null
			if ( this.model().element( next.id ) !== null ) {
				return next
			}
			return null
		}

		@ $mol_action
		field_adopt( transfer: DataTransfer ) {
			return transfer.getData( 'text/plain' )
		}

		@ $mol_action
		field_receive( element_id: string ) {
			if ( element_id === this.current_dragged()?.id ) {

				if ( this.current_dragged()?.from === 'combine' ) {
					this.combine_element_id(
						this.current_dragged()?.data.ord,
						null,
					)
				}

			}

		}

		@ $mol_mem
		combine_list( next?: $bun_alh_game_combine_list ) {
			return this.model().combine_list( next )
		}

		@ $mol_mem
		cells_combine() {
			return Array.from( { length: 2 }, ( _, i )=> this.Cell_combine( i ) )
		}

		@ $mol_mem_key
		cell_combine_ord( ord: number ) {
			return ord
		}

		@ $mol_mem_key
		combine_element_id( ord: number, next?: string | null ) {
			if ( next !== undefined ) {
				this.combine_list(
					$bun_array_write(
						this.combine_list(),
						ord,
						next,
					) as $bun_alh_game_combine_list
				)
			}
			return this.combine_list()[ ord ] ?? ''
		}

		@ $mol_mem_key
		combine_element_name( ord: number ) {
			return this.element_name(
				this.combine_list()[ ord ]
			)
		}

		@ $mol_mem_key
		combine_element_icon( ord: number ) {
			return this.element_icon(
				this.combine_list()[ ord ]
			)
		}

		@ $mol_mem
		combine_sub() {
			return [
				... this.cells_combine(),
				this.Cell_result(),
			]
		}

		@ $mol_mem_key
		element_useless( element_id: string | null | undefined ) {
			if ( !element_id ) return false
			return this.element_ids_known().includes( element_id )
		}

		@ $mol_mem
		result_element_id() {
			return this.model().combine(
				... this.combine_list()
			)
			??
			null
		}
		
		@ $mol_mem
		result_element_useless() {
			return this.element_useless( this.result_element_id() )
		}
		
		@ $mol_mem
		result_element_new() {
			return Boolean( this.result_element_id()
				&&
				!this.result_element_useless()
			)
		}

		@ $mol_mem
		result_element_icon() {
			return this.element_icon(
				this.result_element_id()
			)
		}

		@ $mol_mem
		result_element_name() {
			return this.element_name(
				this.result_element_id()
			)
		}

		@ $mol_action
		clear_combine_list() {
			this.combine_list( [ null, null ] )
		}

		@ $mol_action
		know_element( element_id: string ) {
			this.element_ids_known(
				[
					... this.element_ids_known(),
					element_id,
				]
			)
		}

		@ $mol_action
		grab_element( element_id: string ) {
			if ( !this.element_useless( element_id ) ) {
				this.know_element( element_id )
				this.clear_combine_list()
			}
		}

		@ $mol_action
		on_result_click() {
			if ( this.result_element_id() ) {
				this.grab_element( this.result_element_id()! )
			}
		}

	}

}
