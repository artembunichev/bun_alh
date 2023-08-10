namespace $.$$ {

	$mol_style_define(

		$bun_alh_game_page,
		{
			
			flex: {
				grow: 1,
				shrink: 0,
				basis: 0,
			},
			
			Head_container: {
				
				zIndex: 2,
				
			},
			
			Recipes_button: {
								
				position: 'absolute',
				top: '14.5px',
				left: '127px',
				padding: '8px',
				background: {
					color: $bun_alh_theme.main_bold,
				},
				font: {
					size: '18px',
					weight: 'bold',
				},
				
			},
			
			Drop_zone: {
			
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: 1,
				width: '100%',
				height: '100%',
				
			},
			
			Field: {
				
				flex: {
					grow: 1,
					shrink: 0,
					basis: 0,

					direction: 'column',
				},
				align: {
					items: 'center',
				},
				padding: '35px',

			},

			Known_elements: {
				
				zIndex: 2,
				flex: {
					direction: 'column',
				},
				align: {
					items: 'center',
				},
				maxWidth: '100%',
				padding: '15px',
				background: {
					color: $bun_alh_theme.main_light,
				},
				border: {
					width: '6px',
					style: 'solid',
					color: $bun_alh_theme.border,
					radius: '15px',
				},

			},
			
			Victory_message: {
				
				position: 'relative',
				top: '-9px',
				
				color: $bun_alh_theme.victory,
				font: {
					size: '18px',
					weight: 'bold',
				},
				
			},

			Known_elements_scroll: {

				maxWidth: '100%',
				overflow: {
					x: 'auto',
				},
				paddingBottom: '7px',

			},

			Combine: {
				
				zIndex: 2,
				flex: {
					grow: 1,
					shrink: 0,
					basis: 0,
				},
				align: {
					items: 'center',
				},

			},

		},

	)

}
