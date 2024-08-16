export {getHeader} from './getHeader';

export const reformatDate = (date: Date): string => {
  const formatted = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formatted;
};
