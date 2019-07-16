import Vue from 'vue';

const getDate = (datetime) => {
  const date = new Date(datetime);
  const ms = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${date.getDate()} ${ms[date.getMonth()]} ${date.getFullYear()}`;
};

Vue.filter('date', getDate);
