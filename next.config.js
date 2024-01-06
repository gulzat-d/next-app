// /** @type {import('next').NextConfig} */
// module.exports = {
// 	images: {
// 		domains: ['courses-top.ru']
// 	},
// 	webpack: (config) => {config.module.rules.push(
// 		{
// 			test: /\.svg$/i,
// 			use: ['@svgr/webpack'],
// 		});
// 		return config;
// 	}
// }

module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				issuer: /\.[jt]sx?$/,
				svgo: true,
				svgoConfig: {
					plugins: [{ 
						name: 'preset-default',
						params:{
							override:{
								removeViewBox:false
							}
						} 
					}],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};