if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/metric/sw.js', { scope: '/metric/' })})}