namespace $.$$ {

	type current_dragged = { id: string; from: string; data: any }

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

		element_size() {
			return 125
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

				if ( this.current_dragged()?.from === 'synth' ) {
					this.synth_list(
						$bun_array_write(
							this.synth_list(),
							this.current_dragged()?.data.ord,
							null,
						) as $bun_alh_game_synth_list
					)
				}

			}

		}

		@ $mol_mem
		synth_list( next?: $bun_alh_game_synth_list ) {
			this.result_element_id( null )
			return this.model().synth_list( next )
		}

		@ $mol_mem
		cells_synth() {
			return Array.from( { length: 2 }, ( _, i )=> this.Cell_synth( i ) )
		}

		@ $mol_mem_key
		cell_synth_ord( ord: number ) {
			return ord
		}

		@ $mol_mem_key
		synth_element_id( ord: number ) {
			return this.synth_list()[ ord ] ?? ''
		}

		@ $mol_mem_key
		synth_element_name( ord: number ) {
			return this.element_name(
				this.synth_list()[ ord ]
			)
		}

		@ $mol_mem_key
		synth_element_icon( ord: number ) {
			return this.element_icon(
				this.synth_list()[ ord ]
			)
		}

		@ $mol_mem
		synth_sub() {
			return [
				... this.cells_synth(),
				this.Cell_result(),
			]
		}

		@ $mol_action
		combine() {
			var result_element_id =
				this.model().combine(
					... this.synth_list()
				)

			this.result_element_id(
				result_element_id
			)
		}

		@ $mol_mem
		result_element_id( next?: string | null ): string | null {
			return next ?? null
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

	}

}
