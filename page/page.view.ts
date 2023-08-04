namespace $.$$ {
	
	export class $bun_alh_page extends $.$bun_alh_page {
		
		@ $mol_mem
		Head_container_sub() {
			return [
				... this.with_back() ? [ this.Back_button() ] : [] ,
				this.Head_title() ,
			]
		}
		
	}
	
}
