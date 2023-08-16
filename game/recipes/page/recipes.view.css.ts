namespace $.$$ {
	
	$mol_style_define(
	
		$bun_alh_game_recipes_page,
		{
			
			No_recipes: {
				
				color: '#5a5a5a',
				font: {
					weight: 'bold',
				},
				
			},
			
			Recipe_list: {
				
				maxHeight: '100%',
				overflow: {
					y: 'auto',
				},
				padding: {
					right: '7px',
				},
				
			},
			
			Recipe: {
				
				margin: [ '8px' , '0px' ],
				
			},
			
			Ings_plus_icon: {
				
				align: {
					items: 'center',
				},
				
			},
			
			Ing: {
				
				background: {
					color: $bun_alh_theme.main_bold_alpha,
				},
				
				border: {
					width: '3px',
					style: 'solid',
					color: $bun_alh_theme.border_bold,
				},
				
				cursor: 'auto',

				Element_title: {
				
					font: {
						size: '13px',
					},
				
				},
				
			},
			
			Plus_icon: {
				
				width: '30px',
				height: '30px',
				
			},
			
			Recipe_result_icon: {
				
				align: {
					items: 'center',
				},
				
			},
			
			Result_icon: {
				
				width: '30px',
				height: '30px',
				
			},
			
			Result: {
				
				border: {
					width: '3px',
					color: $bun_alh_theme.border_bold,
				},
				cursor: 'auto',
				
				Element_title: {
				
					font: {
						size: '13px',
					},	
				
				},
				
				'>': {
					$mol_view: {

						userSelect: 'all',

					},
				},
				
			},
			
		},
	
	)
	
}
