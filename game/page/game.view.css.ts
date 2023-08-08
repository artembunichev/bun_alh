namespace $.$$ {

	$mol_style_define(

		$bun_alh_game_page,
		{
			
			flex: {
				grow: 1,
				shrink: 0,
				basis: 0,
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

			Known_elements_scroll: {

				maxWidth: '100%',
				overflow: {
					x: 'auto',
				},
				paddingBottom: '7px',

			},

			Combine: {

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
