const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerStructure = document.createElement('div');
  const titleStructure = document.createElement('h1');
  const dateStructure = document.createElement('span');
  const tempStructure = document.createElement('span');

  headerStructure.classList.add('header');
  dateStructure.classList.add('date');
  tempStructure.classList.add('temp');

  dateStructure.textContent = date;
  titleStructure.textContent = title;
  tempStructure.textContent = temp;

  headerStructure.appendChild(dateStructure);
  headerStructure.appendChild(titleStructure);
  headerStructure.appendChild(tempStructure);

  return headerStructure;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector);
  headerContainer.append(Header('Test Title', '1/22/2021', '30'))
}

export { Header, headerAppender }
