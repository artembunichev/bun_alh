namespace $.$$ {

	$mol_style_define(

		$bun_alh_game_page,
		{

			flex: {
				grow: 1,
				shrink: 0,
				basis: 0,

				direction: 'column',
			},

			Title: {

				justify: {
					content: 'center',
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
				paddingBottom: '7px',

			},

			Synth: {

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
