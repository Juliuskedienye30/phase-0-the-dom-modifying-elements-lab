// Write your code here!
// 1. Remove the existing <main> element with id="main"
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id to 'victory'
newHeader.id = 'victory';

// 4. Set the text content
newHeader.textContent = 'Julius is the champion'; // <-- Change "Julius" to your name

// 5. Append it to the document body
document.body.appendChild(newHeader);
