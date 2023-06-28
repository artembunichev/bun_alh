namespace $.$$ {

	type Element = { id: string; name: string }

	export class $bun_alh_app extends $.$bun_alh_app {

		@ $mol_mem
		game( next?: $bun_alh_game | null ) {
			return next ?? null!
		}

		@ $mol_action
		start() {
			this.game( new $bun_alh_game() )
		}

		@ $mol_mem
		sub() {
			return [
				... this.game() ? [ this.Game_page() ] : [ this.Start_page() ]
			]
		}

	}

}
