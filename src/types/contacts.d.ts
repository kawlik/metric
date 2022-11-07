type propsType = 'address' | 'email' | 'icon' | 'name' | 'tel';

export default interface Contacts {
	contacts?: {
		getProperties: () => Promise<Array<propsType>>;
		select: (
			props: propsType[],
			opts?: {
				multiple: boolean;
			},
		) => Promise<
			Array<{
				address: string[];
				email: string[];
				icon: string[];
				name: string[];
				tel: string[];
			}>
		>;
	};
}
