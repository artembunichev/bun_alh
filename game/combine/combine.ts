namespace $ {

	export function $bun_alh_game_combine( ... elements: $bun_alh_game_ings_nullable ) {

		const recipes = $bun_alh_game_recipes

		for( var new_element in recipes ) {

			var ings = recipes[ new_element ]

			if (
				( elements[ 0 ] === ings[ 0 ] && elements[ 1 ] === ings[ 1 ] )
				||
				( elements[ 0 ] === ings[ 1 ] && elements[ 1 ] === ings[ 0 ] )
			) {
				return new_element
			}

		}

	}

}
