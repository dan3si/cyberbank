import styles from './Corporation.module.css';
import backButtonIcon from './images/icons/arrow_back_icon.svg';
import attackBackground from './images/attack_background.png';
import attackButtonBackground from './images/attack_button_background.png';
import infoButtonBackground from './images/info_button_background.png';
import infoIcon from './images/icons/info_icon.svg';
import usdeurIcon from './images/icons/usdeur_icon.svg';
import energyIcon from './images/icons/energy_icon.svg';
import swordsIcon from './images/icons/swords_icon.svg';
import lastEventBackground from './images/last_event_background.png';
import employeeBackground from './images/employee_background.png';
import usdeurRedIcon from './images/icons/usdeur_red_icon.svg';
import employeeInfoButtonBackground from './images/employee_info_button_background.png';
import employeeHireButtonBackground from './images/employee_hire_button_background.png';

export const Corporation = ({ lastEvents, employees, balance, employeesHired }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
	    	<button className={styles.backButton}>
	    		<img
	    			src={backButtonIcon}
	    			className={styles.backButtonIcon}
	    		/>
	    	</button>
	    	Корпорация
	    </h2>

      <section className={styles.attack}>
        <img src={attackBackground} className={styles.attackBackground} />

        <div className={`${styles.content} ${styles.attackContent}`}>
          <img src={swordsIcon} className={styles.swordsIcon} />
          <h3 className={styles.attackHeading}>Готовы к бою!</h3>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button}>
              <img src={attackButtonBackground} className={styles.attackButtonBackground} />
              <span className={`${styles.content} ${styles.attackButtonContent}`}>Атаковать</span>
            </button>

            <button className={styles.button}>
              <img src={infoButtonBackground} className={styles.infoButtonBackground} />
              <span className={`${styles.content} ${styles.infoButtonContent}`}>
                <img src={infoIcon} className={styles.infoButtonIcon} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.lastEventsWrapper}>
        <h5 className={styles.lastEventsHeading}>Последние события</h5>
        
        {lastEvents.map(({
          avatar,
          userName,
          actionType,
          amount,
        }) => (
          <div className={styles.lastEvent}>
            <img src={lastEventBackground} className={styles.lastEventBackground} />
            
            <div className={`${styles.content} ${styles.lastEventContent}`}>
              <div className={styles.userInfo}>
                <div
                  className={styles.lastEventAvatar}
                  style={{ backgroundImage: `url(${avatar})`}}
                />

                <div>
                  <div className={styles.lastEventName}>{userName}</div>
                  <div className={styles.lastEventType}>{actionType}</div>
                </div>
              </div>

              <div className={styles.lastEventAmountWrapper}>
                {amount}
                <img src={energyIcon} className={styles.amountIcon} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.employeesWrapper}>
        <h5 className={styles.employeesHeading}>Сотрудники</h5>
        
        <div className={styles.employees}>
          <div className={styles.balance}>
            Доступно
            <span className={styles.balanceAmount}>
              {balance}
              <img src={usdeurIcon} className={styles.balanceIcon} />
            </span>
          </div>

          {employees.map(({ name, price }) => (
            <div className={styles.employee}>
              <img src={employeeBackground} className={styles.employeeBackground} />

              <div className={`${styles.content} ${styles.employeeContent}`}>
                <div className={styles.employeeInfo}>
                  <div className={styles.employeeInfoFirstRow}>
                    {name}
                  </div>
                  <div className={styles.employeeInfoSecondRow}>
                    <span className={styles.redText}>{price}</span>
                    <img src={usdeurRedIcon} className={styles.employeeCostIcon} />
                    <span className={styles.dot}>·</span>
                    <span className={styles.redText}>У вас {employeesHired}</span>
                  </div>
                </div>
                <div className={styles.employeeButtonsWrapper}>
                  <button className={`${styles.button} ${styles.employeeInfoButton}`}>
                    <img src={employeeInfoButtonBackground} className={styles.employeeInfoButtonBackground} />
                    <span className={`${styles.content} ${styles.employeeInfoButtonContent}`}>
                      <img src={infoIcon} className={styles.employeeInfoButtonIcon} />
                    </span>
                  </button>

                  <button className={`${styles.button} ${styles.employeeHireButton}`}>
                    <img src={employeeHireButtonBackground} className={styles.employeeHireButtonBackground} />
                    <span className={`${styles.content} ${styles.employeeHireButtonContent}`}>Нанять</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
