namespace $.$$ {
	
	export class $bun_alh_game_cell_known extends $.$bun_alh_game_cell_known {
		
		@ $mol_action
		add_element_to_empty_combine_cell() {
			var new_combine_list = this.combine_list().slice()
			
			for( var i = 0 ; i < this.combine_list().length ; ++ i ) {
				
				if( new_combine_list[ i ] === null ) {
					new_combine_list[ i ] = this.element_id()
					break
				}
				
			}
			
			this.combine_list( new_combine_list )
		}
		
	}
	
}
