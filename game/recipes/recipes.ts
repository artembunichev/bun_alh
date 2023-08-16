namespace $ {

	export type $bun_alh_game_ings = [ string, string ]
	export type $bun_alh_game_ings_nullable = [ string | null, string | null ]

	export type $bun_alh_game_recipes_type = Record< string, $bun_alh_game_ings >

	export const $bun_alh_game_recipes: $bun_alh_game_recipes_type = {

		dust: ['air','earth'],
		energy: ['air','fire'],
		land: ['earth','earth'],
		lava: ['fire','earth'],
		mist: ['air','water'],
		mud: ['water','earth'],
		pressure: ['air','air'],
		puddle: ['water','water'],
		smoke: ['fire','air'],
		steam: ['water','fire'],
		brick: ['mud','fire'],
		continent: ['land','earth'],
		earthquake: ['earth','energy'],
		eruption: ['pressure','lava'],
		geyser: ['steam','earth'],
		granite: ['pressure','lava'],
		gunpowder: ['energy','dust'],
		heat: ['air','energy'],
		obsidian: ['lava','water'],
		pond: ['puddle','water'],
		stone: ['earth','pressure'],
		volcano: ['lava','earth'],
		wind: ['air','pressure'],
		chimney: ['smoke','brick'],
		clay: ['mud','stone'],
		explosion: ['fire','gunpowder'],
		lake: ['pond','water'],
		metal: ['stone','fire'],
		mountain: ['earth','earthquake'],
		planet: ['continent','continent'],
		plasma: ['heat','pressure'],
		sand: ['stone','wind'],
		tornado: ['wind','wind'],
		wall: ['brick','brick'],
		warmth: ['heat','air'],
		atmosphere: ['air','planet'],
		atomic_bomb: ['explosion','energy'],
		avalanche: ['earthquake','mountain'],
		beach: ['sand','ocean'],
		blade: ['stone','metal'],
		boiler: ['pressure','metal'],
		bullet: ['gunpowder','metal'],
		desert: ['sand','sand'],
		dune: ['wind','desert '],
		firewall: ['fire','wall'],
		glass: ['sand','fire'],
		gold: ['metal','sun'],
		sun: ['fire','sky'],
		cloud: ['air','steam'],
		sky: ['air','cloud'],
		sea: ['water','lake'],

	}

}
