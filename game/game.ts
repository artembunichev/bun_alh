namespace $ {

	export type $bun_alh_game_synth_list = [ string | null, string | null ]

	export class $bun_alh_game extends $mol_object {

		element_list(): Array< $bun_alh_game_element > {
			return [
				{ id: 'water', name: 'Вода' },
				{ id: 'fire', name: 'Огонь' },
				{ id: 'air',  name: 'Воздух' },
				{ id: 'earth',  name: 'Земля' },
				{ id: 'steam',  name: 'Пар' },
				{ id: 'energy',  name: 'Энергия' },
				{ id: 'dust',  name: 'Пыль' },
				{ id: 'cloud', name: 'Облако' },
				{ id: 'lava',  name: 'Лава' },
				{ id: 'mud', name: 'Грязь' },
				{ id: 'ocean', name: 'Океан' },
				{ id: 'pressure', name: 'Давление' },
				{ id: 'rain', name: 'Дождь' },
				{ id: 'sea', name: 'Море' },
				{ id: 'volcano', name: 'Вулкан' },
			]
		}

		@ $mol_mem_key
		element( id: string ) {
			return this.element_list().find( ( el )=> el.id === id )! ?? null
		}

		@ $mol_mem_key
		element_icon( id: string ) {
			return `bun/alh/icons/${ id }.svg`
		}

		@ $mol_mem_key
		element_name( id: string ) {
			return this.element( id ).name
		}

		@ $mol_mem
		element_ids_known( next?: Array< string > ) {
			return next ?? this.element_list().map( ( { id } ) => id )
		}

		@ $mol_mem
		synth_list( next?: $bun_alh_game_synth_list ) {
			return next ?? [ null, null ]
		}

	}

}
