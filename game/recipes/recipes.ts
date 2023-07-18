namespace $ {

	export type $bun_alh_game_ings = [ string, string ]
	export type $bun_alh_game_ings_nullable = [ string | null, string | null ]

	export type $bun_alh_game_recipes_type = Record< string, $bun_alh_game_ings >

	export const $bun_alh_game_recipes: $bun_alh_game_recipes_type = {

		steam: ['water','air'],
		energy: ['air','fire'],
		dust: ['air','earth'],
		lava: ['fire','earth'],

	}

}
