import React from 'react';
import styles from './Card.module.css';
import profileBackground from './images/profile_background.png';
import withdrawButtonBackground from './images/withdraw_button_background.png';
import watchAdBackground from './images/watch_ad_background.png';
import corporationBackground from './images/corporation_background.png';
import advertiseBackground from './images/advertise_background.png';
import transfersButtonBackground from './images/transfers_button_background.png';
import withdrawalsButtonBackground from './images/withdrawals_button_background.png';
import energyIcon from './images/icons/energy.svg';
import arrowRightIcon from './images/icons/arrow_right.svg';
import repeatIcon from './images/icons/repeat.svg';

export const Card = ({
  avatar,
  name,
  energyCount,
  usdeurCount,
  rubCount,
}) => (
  <div className={styles.card}>
    <h3 className={styles.heading}>CYBERBANK</h3>

    <div className={styles.profile}>
      <img src={profileBackground} className={styles.profileBackground} />
      <div className={styles.content}>
        <div className={styles.profileDataWrapper}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          />

          <div className={styles.profileData}>
            <div className={styles.profileDataBalance}>
              <div className={styles.profileDataBalance__leftColumn}>
                <div className={styles.name}>{name}</div>
                <div className={styles.energy}>
                  {energyCount}
                  <img src={energyIcon} className={styles.energyIcon} />
                </div>
              </div>

              <div className={styles.profileDataBalance__rightColumn}>
                <div className={styles.usdeur}>
                  {usdeurCount}
                </div> 
                <div className={styles.rub}>
                  {rubCount}
                </div>
              </div>
            </div>

            <button className={styles.withdrawButton}>
              <img src={withdrawButtonBackground} className={styles.withdrawButtonBackground} />
              
              <span className={styles.content}>
                <span className={styles.withdrawButtonContent}>Вывести</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.watchAd}>
      <img src={watchAdBackground} className={styles.watchAdBackground} />
      <div className={styles.content}>
        <div className={styles.watchAdContainer}>
          <div className={styles.watchAd__leftColumn}>
            <h3 className={styles.watchAdHeading}>Посмотреть рекламу</h3>
            <div className={styles.watchAd__bonuses}>
              <div className={styles.watchAd__usdeur}>
                +10
              </div>
              <div className={styles.watchAd__rub}>
                +1
              </div>
            </div>
          </div>
          <div className={styles.watchAd__rightColumn}>
            <div className={styles.watchAd__buttonWrapper}>
              <button className={styles.watchAdButton}>
                <img src={repeatIcon} className={styles.watchAdButtonIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.corporation}>
      <img src={corporationBackground} className={styles.corporationBackground} />
      <div className={styles.content}>
        <div>
          <h3 className={styles.corporationHeading}>Корпорация</h3>
          <span className={styles.corporationDescription}>Захватите власть</span>
        </div>
        <button className={styles.corporationButton}>
          <img src={arrowRightIcon} />
        </button>
      </div>
    </div>

    <div className={styles.advertise}>
      <img src={advertiseBackground} className={styles.advertiseBackground} />
      <div className={styles.content}>
        <label
          htmlFor="advertiseCheckbox"
          className={styles.advertiseCheckboxLabel}
        >
          <span className={styles.advertiseText}>Реклама</span>
          <input
            type="checkbox"
            className={styles.advertiseCheckbox}
            id="advertiseCheckbox"
          />
          <span
            className={styles.advertiseCheckboxIcon}
          />
        </label>
      </div>
    </div>

    <div className={styles.transfers}>
      <button className={styles.transfersButton}>
        <img src={transfersButtonBackground} className={styles.transfersButtonBackground} />
        <span className={styles.content}>
          <span className={styles.transfersButtonText}>Переводы</span>
        </span>
      </button>

      <div className={styles.transfersButtonSeparator} />

      <button className={styles.withdrawalsButton}>
        <img src={withdrawalsButtonBackground} className={styles.withdrawalsButtonBackground} />
        <span className={styles.content}>
          <span className={styles.withdrawalsButtonText}>Выводы</span>
        </span>
      </button>
    </div>
  </div>
);
