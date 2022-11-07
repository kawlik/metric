import { Delete, Dialpad, Person, PersonOff, PersonSearch, Phone } from '@mui/icons-material';
import {
	Avatar,
	ButtonGroup,
	Dialog,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useContexts } from '../contexts/@';
import { AppAgentService, AppAlertService, AppPhoneService } from '../services/@.service';

export default function (props: { users: string[]; setUsers(users: string[]): void }) {
	// component logic
	const contexts = useContexts();

	const userAuth = contexts.userAuth.get();
	const usersSet = new Set(props.users);

	const assignedUsersLimit = 9;
	const assignedUsersArray = new Array(...usersSet);
	const unassignedSlots = new Array(assignedUsersLimit - assignedUsersArray.length).fill(
		'Unasigned slot',
	);

	// component state
	const [isPromptOpen, setIsPromptOpen] = useState(false);
	const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);

	function removeUser(user: string) {
		usersSet.delete(user);
		props.setUsers([...usersSet.add(userAuth?.phoneNumber!)]);
	}

	function selectNumber(number: string) {
		try {
			const phoneNumber = AppPhoneService.parseToPhoneNumber(number);

			props.setUsers([...usersSet.add(userAuth?.phoneNumber!).add(phoneNumber)]);
		} catch (error) {
			AppAlertService.error();
		}

		setIsPromptOpen(false);
		setPhoneNumbers([]);
	}

	async function selectUserFromContacts() {
		try {
			setIsPromptOpen(true);
			const contacts = (await AppAgentService.selectContact()) || [];
			const contact = contacts[0];

			if (!contact) return;

			setPhoneNumbers(contact.tel);
		} catch (error) {
			AppAlertService.error();
		}
	}

	async function selectUserFromDial() {
		try {
			const phoneString = await AppAlertService.prompt(
				'Add user via phone number, eg: +48 123 456 789',
				'+48 ',
			);

			if (phoneString) {
				const phoneNumber = AppPhoneService.parseToPhoneNumber(phoneString);
				props.setUsers([...usersSet.add(userAuth?.phoneNumber!).add(phoneNumber)]);
			}
		} catch (error) {
			AppAlertService.error();
		}
	}

	// component lifecycle
	useEffect(() => {
		props.setUsers([...usersSet.add(userAuth?.phoneNumber!)]);
	}, []);

	// component layout
	return (
		<>
			<List sx={{ padding: 0 }}>
				{assignedUsersArray.map((user, index) => (
					<ListItem key={index}>
						<ListItemAvatar>
							<Avatar>
								<Person />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={<Typography noWrap={true}>{user}</Typography>} />
						<IconButton
							disabled={user === userAuth?.phoneNumber}
							onClick={() => removeUser(user)}
						>
							<Delete />
						</IconButton>
					</ListItem>
				))}
				{unassignedSlots.map((user, index) => (
					<ListItem key={index}>
						<ListItemAvatar>
							<Avatar>
								<PersonOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={<Typography noWrap={true}>{user}</Typography>} />
						{index === 0 && (
							<ButtonGroup>
								<IconButton onClick={selectUserFromDial}>
									<Dialpad />
								</IconButton>
								<IconButton
									disabled={!AppAgentService.agentSupports('contacts')}
									onClick={selectUserFromContacts}
								>
									<PersonSearch />
								</IconButton>
							</ButtonGroup>
						)}
					</ListItem>
				))}
			</List>
			<Dialog
				fullWidth={true}
				maxWidth={'sm'}
				open={isPromptOpen}
				onClose={() => setIsPromptOpen(false)}
			>
				<DialogTitle>Select phone number</DialogTitle>
				<List>
					{phoneNumbers.map((number) => (
						<ListItemButton key={number} onClick={() => selectNumber(number)}>
							<ListItemAvatar>
								<Avatar>
									<Phone />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								<Typography noWrap={true}>{number}</Typography>
							</ListItemText>
						</ListItemButton>
					))}
				</List>
			</Dialog>
		</>
	);
}
