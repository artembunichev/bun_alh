namespace $.$$ {
	
	$mol_style_define(
		
		$bun_alh_page ,
		{
			
			flex: {
				grow: 1,
				shrink: 0,
				basis: 0,
				
				direction: 'column',
			},
			
			padding: {
				top: '6px',
				right: '25px',
				bottom: '25px',
				left: '25px',
			},
			
			align: {
				items: 'center',
			},
			
			Head_container: {
				
				position: 'relative',
				color: '#fff',
				
			},
			
			Back_button: {
				
				position: 'absolute',
				top: '21px',
				left: '-40px',
				alignItems: 'center',
				background: {
					color: $bun_alh_theme.main_bold,				
				},
			},
			
			Content: {
				
				maxWidth: '100%',
				flex: {
					grow: 1,
					shrink: 0,
					basis: 0,				
				},
				
			},
			
		},
	
	)
	
	$mol_style_define(
	
		$bun_alh_page_button_back ,
		{
			
			Icon: {
				
				width: '28px',
				height: '28px',
				
			},
			
		},
	
	)
	
}
