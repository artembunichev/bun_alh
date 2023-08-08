namespace $.$$ {
	
	$mol_style_define(
	
		$bun_alh_board ,
		{
			
			maxWidth: '100%',
			maxHeight: '100%',
			flex: {
				grow: 0,
				basis: 'auto',
			},
			flexDirection: 'column',
			padding: '15px',
			background: {
				color: $bun_alh_theme.main_bold,
			},
			border: {
				width: '4px',
				style: 'solid',
				color: $bun_alh_theme.border_bold,
			},
			borderRadius: '15px',
			
			Title: {
				
				justify: {
					content: 'center',
				},
				marginBottom: '12px',
				font: {
					size: '20px',
					weight: 'bold',
				},
				
			},
			
			Content: {
				
				maxHeight: '100%',
				flex: {
					grow: 1,
					shrink: 0,
					basis: 0,
				},
				padding: '15px',
				borderRadius: '15px',
				background: {
					color: $bun_alh_theme.main_light,
				},
				
			},
			
		},
	
	)

}
