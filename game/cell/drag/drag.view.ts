namespace $.$$ {

	export class $bun_alh_game_cell_drag extends $.$bun_alh_game_cell_drag {

		auto() {
			this.drag_image()
		}

		from_data() {
			return undefined
		}

		@ $mol_mem
		drag_image() {
			if ( this.element_icon() ) {
				const container_id = 'element_icon_canvas_container'

				var container =
					document.getElementById( container_id )

				if ( !container ) {
					var container_div = document.createElement( 'div' )
					container_div.setAttribute( 'id', container_id )

					container_div.style.position = 'absolute'
					container_div.style.top = '-100%'
					container_div.style.left = '-100%'

					document.body.appendChild( container_div )

					container = container_div
				}

				const id = `${ this.element_id() }_canvas`

				var canvas_from_dom =
					document.getElementById( id )
					?? null

				if ( !canvas_from_dom ) {

					var canvas = document.createElement( 'canvas' )
					canvas.setAttribute( 'id', id )

					canvas.width = this.element_size()
					canvas.height = this.element_size()

					var ctx = canvas.getContext( '2d' )

					var img_source = new Image()
					img_source.src = this.element_icon()

					img_source.onload = ()=> {
						ctx.drawImage( img_source, 0, 0, canvas.width, canvas.height )
					}

					container.appendChild( canvas )

					return canvas

				}

				return canvas_from_dom

			}

			return new Image
		}

		drag_image_offset() {
			return this.element_size() / 2
		}

		drag_start( e: DragEvent ) {
			if ( this.element_id() ) {
				super.drag_start( e )

				e.dataTransfer.setDragImage( this.drag_image(), this.drag_image_offset(), this.drag_image_offset() )
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
