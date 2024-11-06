import React, { FC } from 'react'
import { ILogItem } from '../../../types';
import { BsFillPersonFill } from 'react-icons/bs';
import { author, date, logItemWrap, message } from './LogItem.css';

type TLogitemProps = {
  logItem: ILogItem;
}

const LogItem: FC<TLogitemProps> = ({ logItem }) => {

  const timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));

  const showTime = `
  ${ timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : "" }
  ${ timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s ago` : "" }
  ${ timeOffset.getSeconds() === 0 ? `just now` : "" }
  `

  return (
    <div className={logItemWrap}>
      <div className={author}>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div className={message}>{logItem.logMessage}</div>
      <div className={date}>{showTime}</div>
    </div>
  )
}

export default LogItem
