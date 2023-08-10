namespace $.$$ {
	
	type ControlWay = {
		title : string
		description : string
	}
	
	export class $bun_alh_controls_page extends $.$bun_alh_controls_page {
		
		@ $mol_action
		open_start_page() {
			this.app_page( 'start' )
		}
		
		@ $mol_mem
		ways() : Array< ControlWay > {
			return [
				{
					title: 'Перетаскивание',
					description: 'Перетащите известный элемент в ячейку для комбинирования. Перетащите элемент в любое свободное место вне ячейки комбинирования, чтобы исключить его из комбинации.'
				},
				
				{
					title: 'Двойной клик',
					description: 'Кликните дважды по известному элементу, чтобы добавить его в свободную ячейку для комбинирования. Дважды кликните по элементу в ячейке для комбинирования, чтобы исключить его из комбинации.'
				},
			]
		}
		
		@ $mol_mem
		way_list() {
			return this.ways().map( ( _ , index ) => this.Way( index ) )
		}
		
		@ $mol_mem_key
		way_title( idx : number ) {
			return this.ways()[ idx ].title
		}
		
		@ $mol_mem_key
		way_description( idx : number ) {
			return this.ways()[ idx ].description
		}
		
	}
	
}
