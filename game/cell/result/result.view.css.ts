namespace $.$$ {

	$mol_style_define(

		$bun_alh_game_cell_result,
		{

			background: {
				color: '#f2f3f5',
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
							color: '#e1e1e1',
							image: `repeating-linear-gradient(
								-45deg,
								#c7c7c75d 0px 22px,
								#0000 22px 55px
							)`,
						},
						border: {
							color: '#c7c7c7',
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
