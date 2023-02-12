window.addEventListener('load', () => {
	if (!('serviceWorker' in navigator)) {
    // service workers not supported 😣
		return
	}

	navigator.serviceWorker.register('/sw.js').then(
		() => {
      // registered! 👍🏼
		},
		err => {
			console.error('SW registration failed! 😱', err)
		}
		)
})