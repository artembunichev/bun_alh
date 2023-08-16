namespace $.$$ {

	$mol_style_define(

		$bun_alh_game_cell_result,
		{

			background: {
				color: '#b3a58c',
			},
			border: {
				width: '2px',
				style: 'solid',
				color: $bun_alh_theme.border,
			},
			
			Text: {
			
				color: '#818281',
				font: {
					size: '18px',
					weight: 'bold',
				},
			
			},

			'>': {
				$mol_view: {

					userSelect: 'none',

				},
			},

			'@': {

				useless: {
					true: {

						background: {
							color: '#998c75',
							image: `repeating-linear-gradient(
								-45deg,
								#b3a58c 0px 22px,
								#0000 22px 55px
							)`,
						},
						
						userSelect: 'none',
						cursor: 'not-allowed',

						'>': {
							$mol_view: {

								opacity: 0.5,
								pointerEvents: 'none',

							},
						},

					},
				},
				
				new: {
					true: {
						
						background: {
							color: $bun_alh_theme.main,
						},
						
					},
				},

			},

		},

	)

}
