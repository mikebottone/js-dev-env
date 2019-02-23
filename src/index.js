import './index.css';
import numeral from 'numeral';

const value = numeral(1000).format('$0,0.00');
document.getElementById('words').innerHTML = `I would pay ${value} for this course`;
