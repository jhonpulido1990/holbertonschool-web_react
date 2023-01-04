import $ from 'jquery'
import _ from 'lodash'

// add element in html
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');
$('button').on('click', _.debounce(updateCounter));

let count = 0;

function updateCounter(){
  count += 1;
  $('#count').text(`${count.toString()} clicks on the button`)
}
