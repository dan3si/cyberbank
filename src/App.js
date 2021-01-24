import { Withdrawals } from './components/Withdrawals';
import { Card } from './components/Card';
import { Top } from './components/Top';
import { WithdrawalsStory } from './components/WithdrawalsStory';
import { Transfer } from './components/Transfer';
import { Corporation } from './components/Corporation';

function App() {
  return (
  	<>
  		<Card
  			avatar="https://3dnews.ru/assets/external/illustrations/2021/01/23/1030828/cyberpunk-2077-cinematic-keanu.jpg"
				name="Никита"
				energyCount={100}
				usdeurCount={100}
				rubCount={100}
  		/>
  		<br />
  		<br />

  		<Withdrawals />

			<br />
  		<br />

			<Top
				seasonNumber={1}
				seasonTimeLeft={{
					days: 15,
					hours: 2,
					minutes: 15,
				}}
				prizeTimeLeft={{
					minutes: 15,
					seconds: 5,
				}}
				currentPrizeNumber={134}
			/>

			<br />
  		<br />

			<WithdrawalsStory
				operations={[
					{
						wallet: '+79788888888',
						date: '01.01.2021',
						amount: 100,
						paymentSystem: 'счёт QIWI',
						status: 'fulfilled',
					},
					{
						wallet: '**** **** **** 0000',
						date: '01.01.2021',
						amount: 750,
						paymentSystem: 'карта банка',
						status: 'pending',
					},
					{
						wallet: '+79788888888',
						date: '01.01.2021',
						amount: 50,
						paymentSystem: 'баланс телефона',
						status: 'rejected',
					},
				]}
			/>

			<br />
  		<br />

			<Transfer
				lastTransfers={[
					{
						avatar: 'https://3dnews.ru/assets/external/illustrations/2021/01/23/1030828/cyberpunk-2077-cinematic-keanu.jpg',
						userName: 'Богдан Митурич',
						transferType: 'исходящий перевод',
						amount: 10,
					},
					{
						avatar: 'https://3dnews.ru/assets/external/illustrations/2021/01/23/1030828/cyberpunk-2077-cinematic-keanu.jpg',
						userName: 'Богдан Митурич',
						transferType: 'исходящий перевод',
						amount: 10,
					},
				]}
			/>

			<br />
  		<br />

			<Corporation
				lastEvents={[
					{
						avatar: 'https://3dnews.ru/assets/external/illustrations/2021/01/23/1030828/cyberpunk-2077-cinematic-keanu.jpg',
						userName: 'Богдан Митурич',
						actionType: 'Атаковал вас',
						amount: 10,
					},
				]}
				employees={[
					{
						name: 'Наименование',
						price: 100,
					},
					{
						name: 'Наименование',
						price: 100,
					},
					{
						name: 'Наименование',
						price: 100,
					},
					{
						name: 'Наименование',
						price: 100,
					},
					{
						name: 'Наименование',
						price: 100,
					},
				]}
				balance={100}
				employeesHired={10}
			/>
  	</>
  );
}

export default App;
