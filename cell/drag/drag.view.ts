namespace $.$$ {

	export class $bun_alh_cell_drag extends $.$bun_alh_cell_drag {

		from_data() {
			return undefined
		}

		drag_start( e: DragEvent ) {
			if ( this.element_id() ) {
				super.drag_start( e )
				this.current_dragged( { id: this.element_id(), from: this.from_id(), data: this.from_data() } )
			}
			else {
				e.preventDefault()
			}
		}

		drag_end() {
			super.drag_end()
			this.current_dragged( null )
		}

	}

}
