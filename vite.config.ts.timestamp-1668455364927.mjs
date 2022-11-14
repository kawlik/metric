// vite.config.ts
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
var vite_config_default = defineConfig({
	base: '/metric/',
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.*'],
			},
			manifest: {
				name: 'Metric',
				short_name: 'Metric',
				description:
					'Metric \u2014 Progressive Web Application to manage your expenses!',
				orientation: 'portrait',
				display: 'standalone',
				icons: [
					{
						purpouse: 'maskable',
						src: 'android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						purpouse: 'maskable',
						src: 'android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxLYW1pbFxcXFxDb2RlXFxcXE1ldHJpY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcS2FtaWxcXFxcQ29kZVxcXFxNZXRyaWNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0thbWlsL0NvZGUvTWV0cmljL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuLy8gZXh0ZXJuYWwgcGx1Z2luc1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuLy8gdml0ZSBjb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdGJhc2U6ICcvbWV0cmljLycsXG5cdHBsdWdpbnM6IFtcblx0XHRyZWFjdCgpLFxuXHRcdFZpdGVQV0Eoe1xuXHRcdFx0cmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG5cdFx0XHR3b3JrYm94OiB7XG5cdFx0XHRcdGdsb2JQYXR0ZXJuczogWycqKi8qLionXSxcblx0XHRcdH0sXG5cdFx0XHRtYW5pZmVzdDoge1xuXHRcdFx0XHRuYW1lOiAnTWV0cmljJyxcblx0XHRcdFx0c2hvcnRfbmFtZTogJ01ldHJpYycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnTWV0cmljIFx1MjAxNCBQcm9ncmVzc2l2ZSBXZWIgQXBwbGljYXRpb24gdG8gbWFuYWdlIHlvdXIgZXhwZW5zZXMhJyxcblx0XHRcdFx0b3JpZW50YXRpb246ICdwb3J0cmFpdCcsXG5cdFx0XHRcdGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcblx0XHRcdFx0aWNvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwdXJwb3VzZTogJ21hc2thYmxlJyxcblx0XHRcdFx0XHRcdHNyYzogJ2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJyxcblx0XHRcdFx0XHRcdHNpemVzOiAnMTkyeDE5MicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHB1cnBvdXNlOiAnbWFza2FibGUnLFxuXHRcdFx0XHRcdFx0c3JjOiAnYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuXHRcdFx0XHRcdFx0c2l6ZXM6ICc1MTJ4NTEyJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0sXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBRLFNBQVMsb0JBQW9CO0FBQ3ZTLFNBQVMsZUFBZTtBQUd4QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1IsY0FBYyxDQUFDLFFBQVE7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLFVBQVU7QUFBQSxZQUNWLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsVUFBVTtBQUFBLFlBQ1YsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
