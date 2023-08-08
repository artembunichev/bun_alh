namespace $.$$ {

	type Element = { id: string; name: string }

	type Page =
		| 'start'
		| 'controls'
		| 'game'
		| 'recipes'

	export class $bun_alh_app extends $.$bun_alh_app {
		
		auto() {
			this.on_app_open()
		}
		
		@ $mol_action
		on_app_open() {
			window.addEventListener( 'beforeunload' , ()=> this.on_app_close() )
		}
		
		@ $mol_action
		on_app_close() {
			$mol_state_local.value(
				'ids_known' ,
				this.element_ids_known()
			)			
		}
		
		@ $mol_mem
		page( next? : Page ) {
			if( next === 'game' ) {
				this.game( new $bun_alh_game() )
			}
			return next ?? 'start'
		}

		@ $mol_mem
		game( next?: $bun_alh_game | null ) {
			return next ?? null!
		}
		
		@ $mol_mem
		element_ids_combined_reversed() {
			return this.element_ids_combined()
				.slice()
				.reverse()
		}

		@ $mol_action
		play() {
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
			
			if( this.page() === 'recipes' ) {
				current_page = this.Recipes_page()
			}
			
			return [
				current_page
			]
		}

	}

}
