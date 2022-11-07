import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Switch,
	Typography,
} from '@mui/material';
import { BillPlanIconMap } from '../configs/@';
import { AppAlertService } from '../services/@.service';
import { BillPlanType } from '../types/@';

export default function (props: {
	plans: BillPlanType[];
	setPlans(plans: BillPlanType[]): void;
}) {
	// component logic
	const chosenPlansSet = new Set(props.plans.map((plan) => plan.title));
	const availablePlans = [...BillPlanIconMap].map((plan) => ({
		icon: plan[1],
		name: plan[0],
	}));

	async function appendPlan(plan: string, filteredPlans: BillPlanType[]) {
		const limitString = await AppAlertService.prompt('Set plan limit');
		const limitNumber = Number.parseFloat(limitString);

		if (Number.isNaN(limitNumber) || limitNumber < 0) return;

		props.setPlans([...filteredPlans, { limit: limitNumber, title: plan }]);
		chosenPlansSet.add(plan);
	}

	async function deletePlan(plan: string, filteredPlans: BillPlanType[]) {
		props.setPlans(filteredPlans);
		chosenPlansSet.delete(plan);
	}

	function onPlanChange(plan: string, mode: boolean) {
		const filteredPlans = props.plans.filter((item) => item.title !== plan);

		if (mode) {
			appendPlan(plan, filteredPlans);
		} else {
			deletePlan(plan, filteredPlans);
		}
	}

	// component layout
	return (
		<List sx={{ padding: 0 }}>
			{availablePlans.map((expense) => (
				<ListItem key={expense.name}>
					<ListItemAvatar>
						<Avatar>
							<expense.icon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={<Typography noWrap={true}>{expense.name}</Typography>}
					/>
					<Switch
						onChange={(e) => onPlanChange(expense.name, e.target.checked)}
						checked={chosenPlansSet.has(expense.name)}
					/>
				</ListItem>
			))}
		</List>
	);
}
