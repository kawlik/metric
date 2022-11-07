// define dervice
class AppAlertService {
	private readonly defErrorMessage = 'Something went wrong. Please try again later.';

	error = (message?: string): Promise<void> =>
		new Promise((resolve) => {
			alert(message || this.defErrorMessage);
			resolve();
		});

	alert = (message: string): Promise<void> =>
		new Promise((resolve) => {
			alert(message);
			resolve();
		});

	confirm = (message: string): Promise<boolean> =>
		new Promise((resolve) => {
			if (confirm(message)) {
				resolve(true);
			} else {
				resolve(false);
			}
		});

	prompt = (message: string, defaultValue?: string): Promise<string> =>
		new Promise((resolve) => {
			resolve(prompt(message, defaultValue) || '');
		});
}

// export service
export default new AppAlertService();
