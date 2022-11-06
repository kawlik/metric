import { AppPageEmpty, AppViewStack } from '../components/@';

export default function (props: {}) {
	// component logic

	// component layout
	return (
		<AppViewStack flex={1} sx={{ overflowY: 'scroll' }}>
			<AppPageEmpty />
		</AppViewStack>
	);
}
