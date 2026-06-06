const kbSearch = document.querySelector('#kbSearch');
const kbButtons = [...document.querySelectorAll('#kbList button')];
const globalSearch = document.querySelector('#globalSearch');
const ticketRows = [...document.querySelectorAll('#ticketRows tr')];

function normalize(value) {
  return value.toLowerCase().trim();
}

function filterKnowledgeBase(value) {
  const query = normalize(value);
  kbButtons.forEach((button) => {
    const title = normalize(button.dataset.title || button.textContent);
    button.hidden = query && !title.includes(query);
  });
}

function filterTickets(value) {
  const query = normalize(value);
  ticketRows.forEach((row) => {
    const text = normalize(row.textContent);
    row.hidden = query && !text.includes(query);
  });
}

kbSearch?.addEventListener('input', (event) => {
  filterKnowledgeBase(event.target.value);
});

globalSearch?.addEventListener('input', (event) => {
  filterTickets(event.target.value);
  filterKnowledgeBase(event.target.value);
});

kbButtons.forEach((button) => {
  button.addEventListener('click', () => {
    kbSearch.value = button.dataset.title;
    filterKnowledgeBase(button.dataset.title);
  });
});
