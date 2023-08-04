namespace $.$$ {

	type Element = { id: string; name: string }

	type Page =
		| 'start'
		| 'controls'
		| 'game'

	export class $bun_alh_app extends $.$bun_alh_app {
		
		@ $mol_mem
		page( next? : Page ) {
			return next ?? 'start'
		}

		@ $mol_mem
		game( next?: $bun_alh_game | null ) {
			return next ?? null!
		}

		@ $mol_action
		play() {
			this.game( new $bun_alh_game() )
			this.page( 'game' )
		}
		
		@ $mol_action
		open_controls_page() {
			this.page( 'controls' )
		}

		@ $mol_mem
		sub() {
			var current_page = new $mol_view
			
			if( this.page() === 'start' ) {
				current_page = this.Start_page()
			}
			
			if( this.page() === 'controls' ) {
				current_page = this.Controls_page()
			}
			
			if( this.page() === 'game' ) {
				current_page = this.Game_page()
			}
			
			return [
				current_page
			]
		}

	}

}
