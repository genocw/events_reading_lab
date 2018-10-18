document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);
  //  title text input

  // author text input

  // category select box

  // delete all button

  // layout flexbox


  // let readingListAddition;


});

// formSubmit method
const handleFormSubmit = function (event) {
event.preventDefault();
//  grab title value
const title = this.title.value;
const author = this.author.value;
const category = this.category.value;

const newListTitle = document.createElement('p');
newListTitle.classList.add('title');
const list = document.querySelector('#reading-list');


list.appendChild(newListTitle);
newListTitle.textContent = `${ title } by ${  author  } is from the category: ${ category }.`;
// grab author value
// grab category choice

// create html element
// possibly give it a class
// pass in text

};






// const textInput = document.querySelector('#title');
// textInput.addEventListener('input', handleTextInput);

// const handleTextInput = function (event) {
//   newListTitle.textContent = `${  }` `${ thi }`;
// }
