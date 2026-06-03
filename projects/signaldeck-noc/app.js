const traceBtn = document.querySelector('#traceBtn');
const toast = document.querySelector('#toast');
const nodes = document.querySelectorAll('.net-node');
const selectedNode = document.querySelector('#selectedNode');
const assetSearch = document.querySelector('#assetSearch');
const incidentRows = document.querySelectorAll('.incident-row');
const filterButtons = document.querySelectorAll('.segmented button');

nodes.forEach((node) => {
  node.addEventListener('click', () => {
    nodes.forEach((n) => n.classList.remove('active'));
    node.classList.add('active');
    selectedNode.textContent = node.dataset.node;
  });
});

traceBtn.addEventListener('click', () => {
  document.body.classList.add('is-tracing');
  toast.classList.add('show');
  setTimeout(() => document.body.classList.remove('is-tracing'), 2200);
  setTimeout(() => toast.classList.remove('show'), 3200);
});

function applyFilters() {
  const query = assetSearch.value.trim().toLowerCase();
  const activeFilter = document.querySelector('.segmented button.active')?.dataset.filter || 'all';

  incidentRows.forEach((row) => {
    const matchesText = !query || row.dataset.search.includes(query);
    const matchesSeverity = activeFilter === 'all' || row.dataset.severity === activeFilter;
    row.hidden = !(matchesText && matchesSeverity);
  });

  nodes.forEach((node) => {
    const label = node.dataset.node.toLowerCase();
    node.classList.toggle('filtered-out', query && !label.includes(query));
  });
}

assetSearch.addEventListener('input', applyFilters);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    applyFilters();
  });
});
