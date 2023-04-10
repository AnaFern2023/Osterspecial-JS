console.log("hi");

const searchInput = document.querySelector('#search-input');
const text = document.querySelector('#text')

const wordSearch = () => {
    let searchInputValue = searchInput.value

    text.innerHTML = text.innerHTML.replaceAll(searchInputValue, `<span class='highlight'>${searchInputValue}</span>`);
}