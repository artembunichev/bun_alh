namespace $.$$ {
	
	export class $bun_alh_game_recipes_page extends $.$bun_alh_game_recipes_page {
		
		@ $mol_action
		open_game() {
				this.app_page( 'game' )
		}
		
		@ $mol_mem
		board_content() {
			return this.elements().length
				? [ this.Recipe_list() ]
				: [ this.No_recipes() ]
		}
		
		@ $mol_mem_key
		element_id_no_idx( id : string ) {
			return id.split( '_' )[ 0 ]
		}
		
		@ $mol_mem_key
		ing_icon( id : string ) {
			return this.element_icon( this.element_id_no_idx( id ) )
		}
		
		@ $mol_mem_key
		ing_name( id : string ) {
			return this.element_name( this.element_id_no_idx( id ) )
		}
		
		@ $mol_mem_key
		ings( element : string ) {
			return $bun_alh_game_recipes[ element ]
		}
		
		@ $mol_mem_key
		ing_rows_components( element : string ) {
			return this.ings( element )
				.map( ( ing , idx )=> this.Ing( `${ ing }_${ element }_${ idx }` ) )			
		}
		
		@ $mol_mem_key
		ing_rows( element : string ) {
			return this.ing_rows_components( element )
				.reduce(
					( rows , ing_comp , idx , comps )=> {
						rows.push( ing_comp )
				
						if( idx !== comps.length - 1 ) {
							rows.push( this.Ings_plus_icon( `${ element }_${ idx }` ) )
						}
				
						return rows
				}, [] as Array< $mol_view > )
		}
		
		@ $mol_mem
		recipe_rows() {
			return this.elements().map( ( element )=> this.Recipe( element )  )
		}
		
	}
	
}
