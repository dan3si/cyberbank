import styles from './WithdrawalsStory.module.css';
import backButtonIcon from './images/icons/arrow_back_icon.svg';
import fulfilledIcon from './images/icons/fulfilled_icon.svg';
import pendingIcon from './images/icons/pending_icon.svg';
import rejectedIcon from './images/icons/rejected_icon.svg';

export const WithdrawalsStory = ({ operations }) => {
  const getOperationIcon = (status) => {
    switch (status) {
      case 'fulfilled':
        return fulfilledIcon;

      case 'pending':
        return pendingIcon;
      
      case 'rejected':
      default:
        return rejectedIcon;
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
	    	<button className={styles.backButton}>
	    		<img
	    			src={backButtonIcon}
	    			className={styles.backButtonIcon}
	    		/>
	    	</button>
	    	Выводы
	    </h2>

      <section className={styles.operationsWrapper}>
        <h4 className={styles.operationsHeading}>История операций</h4>

        <div className={styles.operations}>
          {operations.map(operation => (
            <div className={styles.operation}>
              <img
                src={getOperationIcon(operation.status)}
                className={styles.operationIcon}
              />

              <div className={styles.operationInfo}>
                <div className={styles.operationInfoRow}>
                  Вывод на <span className={styles.redText}>{operation.wallet}</span>
                </div>
                <div className={styles.operationInfoRow}>
                  <span className={styles.redText}>{operation.date}</span>
                  {' · '}
                  <span className={styles.redText}>{operation.amount}₽</span>
                  {' · '}
                  <span className={styles.redText}>{operation.paymentSystem}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
