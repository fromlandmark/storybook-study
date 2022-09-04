import { Button } from "../components/Button/Button.component";
import { CreditCard } from "../components/CreditCard/CreditCard.component";
import { Module } from "../components/Module/Module.component";
import { ModuleBody } from "../components/Module/ModuleBody.component";
import { ModuleHeader } from "../components/Module/ModuleHeader.component";
import { Sidebar } from "../components/SideBar/Sidebar.component";
import { Stack } from "../components/Stack/Stack.component";
import { StackContainer } from "../components/StackContainer/StackContainer.component";
import { StatisticsCard } from "../components/StatisticsCard/StatisticsCard.component";
import { Layout } from "../layout/layout";

export const OperationsPage = () => {
	return (
		<Layout>
			<Sidebar></Sidebar>
			<StackContainer>
				<Stack direction="row">
					<CreditCard
						cardHolder="Cristian Oliveira"
						cardType="visa"
						mode="withAmount"
						hasGradientBackground={false}
					></CreditCard>
					<CreditCard cardHolder="Cristian Oliveira" cardType="visa" mode="withAmount"></CreditCard>

					<CreditCard
						cardHolder="Cristian Oliveira"
						cardType="visa"
						mode="withAmount"
						amount={399}
					></CreditCard>

					<CreditCard cardHolder="Cristian Oliveira" cardType="visa" mode="withAmount"></CreditCard>
				</Stack>
				<Stack direction="row" gap={12}>
					<Module>
						<ModuleHeader>
							<h1>title</h1>
							<Button type="primary" kind="tertiary">
								Active
							</Button>
						</ModuleHeader>
						<ModuleBody>
							<StatisticsCard
								currency="$"
								currentValue={123331}
								title="Income"
								pastValue={10}
							></StatisticsCard>
							<StatisticsCard
								currency="$"
								currentValue={32440}
								title="Expense"
								pastValue={10}
							></StatisticsCard>
							<StatisticsCard
								currency="$"
								currentValue={432}
								title="Cashback"
								pastValue={10}
							></StatisticsCard>
							<StatisticsCard
								currency="$"
								currentValue={43242}
								title="Monthly Turnover"
								pastValue={10}
							></StatisticsCard>
						</ModuleBody>
					</Module>
				</Stack>
			</StackContainer>
		</Layout>
	);
};
