import axios from 'axios';
import { useState } from 'react';

const botToken = process.env.REACT_APP_BOT_TOKEN || '';
const chatId = process.env.REACT_APP_CHAT_ID || '';

type TData = {
  name: string;
  phone: string;
  message: string;
};

const statuses = {
  IDLE: 'idle',
  PENDING: 'pending',
  FAIL: 'fail',
  SUCCESS: 'success',
};

export function useHandlers() {
  const [requestStatus, setRequestStatus] = useState(statuses.IDLE);

  const handleSubmit = async (data: TData) => {
    try {
      setRequestStatus(statuses.PENDING);
      const phoneNumber = `+380` + data.phone.replace(/\D/g, '');
      const message = `Нові повідомлення від: ${data.name}.\nНомер телефону: ${phoneNumber}\nТема: ${data.message}`;
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      setRequestStatus(statuses.SUCCESS);
    } catch (error) {
      setRequestStatus(statuses.FAIL);
      setTimeout(() => {
        setRequestStatus(statuses.IDLE);
      }, 5000);
    }
  };
  return { handleSubmit, requestStatus };
}
