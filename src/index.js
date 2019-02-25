import './index.css';
import numeral from 'numeral';
import { getUsers, deleteUser } from './api/userApi';

const value = numeral(1000).format('$0,0.00');
document.getElementById('words').innerHTML = `I would pay ${value} for this course`;

// Populate table of users via API call
// uses js to display table but usually completed by using angular or react
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // uses js to delete from table but usually completed by using angular or react
  // Must use array.from to create real array from a DOM collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
