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

				padding: '15px',
				background: {
					color: $bun_alh_theme.main_light,
				},
				border: {
					width: '2px',
					style: 'solid',
					color: $bun_alh_theme.border,
					radius: '15px',
				},

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
