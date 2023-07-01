namespace $.$$ {

	export class $bun_alh_cell_synth_drop extends $.$bun_alh_cell_synth_drop {

		transfer_adopt( transfer: DataTransfer ) {
			var element_id = transfer.getData( 'text/plain' )

			return element_id
		}

		receive( element_id: string ) {
			if ( element_id === this.current_dragged() ) {

				this.synth_list(
					$bun_array_overwrite(
						this.synth_list(),
						this.ord() - 1,
						element_id,
					)
				)

			}
		}


	}

}
