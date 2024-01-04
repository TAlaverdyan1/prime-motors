import { redirect } from 'next/navigation';
import './globals.css';

const NotFound = () => {

  redirect('/');

  return null;
};

export default NotFound;
