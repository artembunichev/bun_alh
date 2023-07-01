namespace $.$$ {

	export class $bun_alh_cell_known extends $.$bun_alh_cell_known {

		drag_start( e: DragEvent ) {
			super.drag_start( e )
			this.current_dragged( this.element_id() )
		}

		drag_end() {
			super.drag_end()
			this.current_dragged( null )
		}

	}

}
