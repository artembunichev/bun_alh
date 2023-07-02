namespace $.$$ {

	export class $bun_alh_game_cell_synth extends $.$bun_alh_game_cell_synth {

		drag_from_data() {
			return { ord: this.ord() }
		}

		transfer_adopt( transfer: DataTransfer ) {
			var element_id = transfer.getData( 'text/plain' )

			return element_id
		}

		receive( element_id: string ) {
			if ( element_id === this.current_dragged()?.id ) {

				if ( this.element_id() === this.current_dragged().id ) {
					return
				}

				if ( this.current_dragged().from === 'synth' ) {

					this.synth_list(
						$bun_array_swap(
							this.synth_list(),
							0,
							1,
						)
					)

				}
				else {

					this.synth_list(
						$bun_array_overwrite(
							this.synth_list(),
							this.ord(),
							element_id,
						)
					)

				}

			}
		}


	}

}
