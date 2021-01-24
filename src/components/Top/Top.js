import styles from './Top.module.css';
import seasonBackground from './images/season_background.png';
import prizeBackground from './images/prize_background.png';
import energyIcon from './images/icons/energy.svg';
import stonksIcon from './images/icons/stonks.svg';

/*type seasonTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
}*/

/*type prizeTimeLeft = {
  minutes: number;
  seconds: number;
}*/

export const Top = ({ seasonNumber, seasonTimeLeft, prizeTimeLeft, currentPrizeNumber }) => {
  const getDaysDeclansion = (count) => {
    count = String(count);

    if ((count[count.length - 1] === '2' || count[count.length - 1] === '3' || count[count.length - 1] === '4')
        && count[count.length - 2] !== '1') {
      return 'дня';
    } else if (count[count.length - 1] === '1' && count[count.length - 2] !== '1') {
      return 'день';
    } else {
      return 'дней';
    }
  }

  const getHoursDeclansion = (count) => {
    count = String(count);

    if ((count[count.length - 1] === '2' || count[count.length - 1] === '3' || count[count.length - 1] === '4')
        && count[count.length - 2] !== '1') {
      return 'часа';
    } else if (count[count.length - 1] === '1' && count[count.length - 2] !== '1') {
      return 'час';
    } else {
      return 'часов';
    }
  }

  const getMinutesDeclansion = (count) => {
    count = String(count);

    if ((count[count.length - 1] === '2' || count[count.length - 1] === '3' || count[count.length - 1] === '4')
        && count[count.length - 2] !== '1') {
      return 'минуты';
    } else if (count[count.length - 1] === '1' && count[count.length - 2] !== '1') {
      return 'минута';
    } else {
      return 'минут';
    }
  }

  const getSecondsDeclansion = (count) => {
    count = String(count);

    if ((count[count.length - 1] === '2' || count[count.length - 1] === '3' || count[count.length - 1] === '4')
        && count[count.length - 2] !== '1') {
      return 'секунды';
    } else if (count[count.length - 1] === '1' && count[count.length - 2] !== '1') {
      return 'секунда';
    } else {
      return 'секунд';
    }
  }

  const getRublesDeclansion = (count) => {
    count = String(count);

    if ((count[count.length - 1] === '2' || count[count.length - 1] === '3' || count[count.length - 1] === '4')
        && count[count.length - 2] !== '1') {
      return 'рубля';
    } else if (count[count.length - 1] === '1' && count[count.length - 2] !== '1') {
      return 'рубль';
    } else {
      return 'рублей';
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.season}>
        <img src={seasonBackground} className={styles.seasonBackground} />
        <div className={styles.content}>
          <div className={styles.seasonContentWrapper}>
            <img src={energyIcon} className={styles.energyIcon} />
            <h2 className={styles.seasonHeading}>Сезон {seasonNumber}</h2>
            <p className={styles.seasonTimeLeftIncription}>До конца осталось:</p>
            <p className={styles.seasonTimeLeft}>
              {seasonTimeLeft.days}
              {' ' + getDaysDeclansion(seasonTimeLeft.days)}
              {' ' + seasonTimeLeft.hours}
              {' ' + getHoursDeclansion(seasonTimeLeft.hours)}
              {' ' + seasonTimeLeft.minutes}
              {' ' + getMinutesDeclansion(seasonTimeLeft.minutes)}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.prize}>
        <img src={prizeBackground} className={styles.prizeBackground} />
        <div className={styles.content}>
          <div className={styles.prizeContentWrapper}>
            <p className={styles.currentPrizeIncription}>
              <img src={stonksIcon} className={styles.stonksIcon} />
              Текущий приз: {currentPrizeNumber} {getRublesDeclansion(currentPrizeNumber)}
            </p>
            <p className={styles.distributionIncription}>
              До конца выдачи: 
              <span className={styles.distributionIncriptionTime}>
                {' ' + prizeTimeLeft.minutes}
                {' ' + getMinutesDeclansion(prizeTimeLeft.minutes)}
                {' ' + prizeTimeLeft.seconds}
                {' ' + getSecondsDeclansion(prizeTimeLeft.seconds)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
