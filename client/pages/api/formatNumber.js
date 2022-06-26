export const formatNumber = (value, props) => {
  const clearNumber = (el) => {
    return el.toString().replace(/\D+/g, '');
  };

  const clearValue = clearNumber(value);

  if (clearValue.length >= 5) {
    const str = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 8)} ${clearValue.slice(
      8,
      12,
    )} ${clearValue.slice(12, 19)}`;
    props.setFieldValue('cardNumber', str.trim());
  } else {
    props.setFieldValue('cardNumber', clearValue);
  }
};
