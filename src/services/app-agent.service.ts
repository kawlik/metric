import { ContactsType } from '../types/@';

// define dervice
class AppAgentService {
	constructor(private navigator: Navigator & ContactsType) {}

	agentPlatform = (platform: 'Android' | 'iPad' | 'iPhone') =>
		this.navigator.userAgent.includes(platform);

	agentSupports = (supports: 'contacts') => !!this.navigator?.contacts;

	selectContact = async (): Promise<Array<{ tel: string[] }>> => {
		if (!this.navigator?.contacts) return [];

		return await this.navigator.contacts.select(['tel'], { multiple: false });
	};

	share = async (data: { title: string; text?: string }) =>
		this.navigator.share({
			url: 'https://kawlik.github.io/metric',
			title: data.title,
			text: data.text,
		});
}

// export service
export default new AppAgentService(window.navigator);
