import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';
import { BillPostType, UserDataType } from '../types/@';

export default function (props: {
	posts: BillPostType[];
	users: string[];
	usersMap?: Map<string, UserDataType>;
}) {
	// component logic
	const totalPosts = props.posts.length;
	const totalValue = props.posts
		.reduce((prev, curr) => {
			if (curr.post.type !== 'Expense') return prev;
			return prev + curr.post.cost;
		}, 0)
		.toFixed(2);

	function getContribution(user: string) {
		return props.posts
			.reduce((prev, curr) => {
				const currType = curr.post.type;
				const currUser = curr.user;

				if (currUser !== user) return prev;
				if (currType !== 'Expense') return prev;

				return prev + curr.post.cost;
			}, 0)
			.toFixed(2);
	}

	// component layout
	return (
		<Stack gap={1} padding={2}>
			<Typography variant={'h4'}>Summary</Typography>
			<Typography variant={'h6'}>💡 Total posts: {totalPosts}</Typography>
			<Typography variant={'h6'}>💰 Total value: {totalValue}</Typography>
			<Typography />
			<Typography variant={'h5'}>Contributions</Typography>
			<List sx={{ padding: 0 }}>
				{props.users.map((user) => (
					<ListItem key={user}>
						<ListItemAvatar>
							<Avatar src={props.usersMap?.get(user)?.displayPict} />
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography noWrap={true}>
									🪙 {getContribution(user)}
								</Typography>
							}
							secondary={
								<Typography noWrap={true} variant={'subtitle2'}>
									{props.usersMap?.get(user)?.displayName || user}
								</Typography>
							}
						/>
					</ListItem>
				))}
			</List>
		</Stack>
	);
}
