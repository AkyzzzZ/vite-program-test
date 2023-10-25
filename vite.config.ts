// ? vite
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { normalizePath } from 'vite' //* 标准化路径

// ?unocss
import UnoCSS from 'unocss/vite'

//?引入path注意两点
//* 1.为了避免类型报错。需要引入path模块的类型  pnpm i @types/node -D
//* 2.tsconfig.node.json 中设置 allowSyntheticDefaultImports: true`，
//* 以允许下面的 default 导入方式
import path from 'path'

// ?postcss
// import autoprefixer from 'autoprefixer'
// ! postcss-preset-env 集成了autoprefixer
import postcssPresetEnv from 'postcss-preset-env'

const themeColorPtah = normalizePath(path.resolve(__dirname, './src/styles/components/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
	// root: path.resolve(__dirname, './src'),

	resolve: {
		extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${themeColorPtah}";`,
			},
		},
		postcss: {
			plugins: [
				// autoprefixer({
				// 	// 指定目标浏览器
				// 	overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
				// }),
				postcssPresetEnv,
			],
		},
	},
	plugins: [vue(), UnoCSS()],
})
