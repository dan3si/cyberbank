import styles from './Transfer.module.css';
import React, { useState } from 'react';
import backButtonIcon from './images/icons/arrow_back_icon.svg';
import transferBackground from './images/transfer_background.png';
import submitButtonBackground from './images/submit_button_background.png';
import infoButtonBackground from './images/info_button_background.png';
import lastTransferBackground from './images/last_transfer_background.png';
import infoIcon from './images/icons/info_icon.svg';
import usdeurIcon from './images/icons/usdeur_icon.svg';


export const Transfer = ({ lastTransfers }) => {
  const [transferData, setTransferData] = useState({
    id: null,
    amount: 100,
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
	    	<button className={styles.backButton}>
	    		<img
	    			src={backButtonIcon}
	    			className={styles.backButtonIcon}
	    		/>
	    	</button>
	    	Перевод
	    </h2>

      <section className={styles.transfer}>
        <img src={transferBackground} className={styles.transferBackground} />
        <div className={styles.content}>
          <div className={styles.transferData}>
            <h5 className={styles.transferDataInputHeading}>Ссылка на профиль или ID</h5>
            <input
              type="text"
              className={styles.input}
              placeholder="https://vk.com/id12345"
              onChange={e => {
                setTransferData({
                  ...transferData,
                  ID: e.target.value,
                });
              }}
            />

            <h5 className={styles.transferDataInputHeading}>Сумма перевода</h5>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={styles.input}
                value={transferData.amount}
                onChange={e => {
                  if (isNaN(e.target.value) || !e.target.value) {
                    return;
                  }

                  setTransferData({
                    ...transferData,
                    amount: Number(e.target.value),
                  });
                }}
              />

              <button
                className={styles.inputResetButton}
                onClick={() => {
                  setTransferData({ ...transferData, amount: 100 });
                }}
              >
                <span className={styles.inputResetButtonMinus}></span>
              </button>
            </div>

            <div className={styles.buttonsWrapper}>
              <button className={styles.button}
                onClick={() => {
                  if (transferData.ID && transferData.amount) {
                    alert(`Отправлено ${transferData.amount}₽ по адресу ${transferData.ID}`);
                  }
                }}
              >
                <img src={submitButtonBackground} className={styles.submitButtonBackground} />
                <span className={`${styles.content} ${styles.submitButtonContent}`}>Перевести</span>
              </button>

              <button className={styles.button}>
                <img src={infoButtonBackground} className={styles.infoButtonBackground} />
                <span className={`${styles.content} ${styles.infoButtonContent}`}>
                  <img src={infoIcon} className={styles.infoButtonIcon} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    
      <section className={styles.lastTransfersWrapper}>
        <h5 className={styles.lastTransfersHeading}>Последние переводы</h5>
        
        {lastTransfers.map(({
          avatar,
          userName,
          transferType,
          amount,
        }) => (
          <div className={styles.lastTransfer}>
            <img src={lastTransferBackground} className={styles.lastTransferBackground} />
            
            <div className={`${styles.content} ${styles.lastTransferContent}`}>
              <div className={styles.userInfo}>
                <div
                  className={styles.lastTransferAvatar}
                  style={{ backgroundImage: `url(${avatar})`}}
                />

                <div>
                  <div className={styles.lastTransferName}>{userName}</div>
                  <div className={styles.lastTransferType}>{transferType}</div>
                </div>
              </div>

              <div className={styles.amountWrapper}>
                {amount}
                <img src={usdeurIcon} className={styles.amountIcon} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
