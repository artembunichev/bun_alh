namespace $.$$ {

	$mol_style_define(

		$bun_alh_app,
		{
			background: {
				color: '#7c7157',
			},
			
			$mol_button: {
				cursor: 'pointer',
			},
			
			$mol_view: {
				
				'::-webkit-scrollbar': {
					height: '7px',
					background: {
						color: $bun_alh_theme.scroll_back,
					},
				},
				'::-webkit-scrollbar-thumb': {
					background: {
						color: $bun_alh_theme.scroll_thumb,
					},
					borderRadius: '15px',
				},
				
			},
			
			flexDirection: 'column',
			
			Start_menu: {
				
				flexDirection: 'column',
				
			},
			
		},

	)

}
