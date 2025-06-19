import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		proxy: {
			'/posts': 'http://localhost:3001',
			'/users': 'http://localhost:3001',
			'/login': 'http://localhost:3001',
			'/logout': 'http://localhost:3001',
			'/register': 'http://localhost:3001',

			// и другие, если нужно
		},
	},
});
