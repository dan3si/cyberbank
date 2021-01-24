import React, { useState } from 'react';
import styles from './Withdrawals.module.css';
import Select from 'react-select';
import sectionBackground from './images/section_background.png';
import withdrawButtonBackground from './images/withdraw_button_background.png';
import backButtonIcon from './images/icons/arrow_back_icon.svg';
import errorIcon from './images/icons/error_icon.svg';

const paymentSystems = [
	{ value: 'qiwi', label: 'QIWI' },
	{ value: 'webmoney', label: 'Webmoney' },
	{ value: 'scrill', label: 'Scrill' },
	{ value: 'paypal', label: 'Paypal' },
	{ value: 'sberbank', label: 'Sberbank' },
];

export const Withdrawals = () => {
	const [withdrawalData, setWithdrawalData] = useState({
		paymentSystem: '',
		sum: 100,
		wallet: '',
	});
	const [error, setError] = useState(false);

	return (
	  <div className={styles.card}>
	    <h2 className={styles.heading}>
	    	<button className={styles.backButton}>
	    		<img
	    			src={backButtonIcon}
	    			className={styles.backButtonIcon}
	    		/>
	    	</button>
	    	Вывод баланса
	    </h2>

	    <section className={styles.section}>
	    	<img src={sectionBackground} className={styles.sectionBackground} />

	    	<div className={styles.content}>
	    		<h3 className={styles.sectionHeading}>Платёжная система</h3>
	    		<Select
	    			options={paymentSystems}
	    			className="react-select-container"
	    			classNamePrefix="react-select"
						placeholder="Выберите платёжную систему"
						isSearchable={false}
						onChange={({ value }) => {
							setError(false);
							setWithdrawalData({
								...withdrawalData,
								paymentSystem: value,
							});
						}}
	    		/>
	    	</div>
	    </section>

	    <section className={styles.section}>
	    	<img src={sectionBackground} className={styles.sectionBackground} />

	    	<div className={styles.content}>
	    		<h3 className={styles.sectionHeading}>Сумма вывода</h3>
	    		<div className={styles.inputWrapper}>
	    			<input
			    		type="text"
			    		className={styles.input}
			    		value={withdrawalData.sum}
			    		onChange={e => {
			    			if (isNaN(e.target.value) || !e.target.value) {
			    				return;
			    			}

			    			setError(false);
								setWithdrawalData({
									...withdrawalData,
									sum: Number(e.target.value),
								});
							}}
		    		/>

		    		<button
		    			className={styles.inputResetButton}
		    			onClick={() => {
		    				setError(false);
		    				setWithdrawalData({ ...withdrawalData, sum: 100 });
		    			}}
		    		>
		    			<span className={styles.inputResetButtonMinus}></span>
		    		</button>
	    		</div>
	    	</div>
	    </section>

	    <section className={styles.section}>
	    	<img src={sectionBackground} className={styles.sectionBackground} />

	    	<div className={styles.content}>
	    		<h3 className={styles.sectionHeading}>Кошелёк/номер для выплаты</h3>
	    		<div className={styles.inputWrapper}>
	    			<input
			    		type="text"
			    		className={styles.input}
			    		value={withdrawalData.wallet}
			    		disabled={!withdrawalData.paymentSystem}
			    		placeholder={withdrawalData.paymentSystem
			    			? 'Введите ваш кошелёк'
			    			: 'Для начала выберите платёжную систему'
			    		}
			    		onChange={e => {
			    			setError(false);
			    			setWithdrawalData({ ...withdrawalData, wallet: e.target.value });
			    		}}
		    		/>

		    		<button
		    			className={styles.inputResetButton}
		    			onClick={() => {
		    				setError(false);
								setWithdrawalData({ ...withdrawalData, wallet: '' });
		    			}}
		    			disabled={!withdrawalData.paymentSystem}
		    		>
		    			<span className={styles.inputResetButtonMinus}></span>
		    		</button>
	    		</div>
	    	</div>
	    </section>

	    <button
	    	className={styles.withdrawButton}
	    	onClick={() => {
	    		if (Object.values(withdrawalData).includes('')) {
	    			setError(true);
	    			return;
	    		}
	    	}}
	    >
        <img src={withdrawButtonBackground} className={styles.withdrawButtonBackground} />
        <span className={styles.withdrawButtonTextWrapper}>
          <span className={styles.withdrawButtonText}>Вывести</span>
        </span>
      </button>

      {error && (
      	<div className={styles.error}>
	      	<img src={errorIcon} />
	      	Заполните все поля
	      </div>
      )}
	  </div>
	);
}
