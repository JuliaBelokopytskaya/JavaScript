const editBtn = document.querySelectorAll('.editButton');
const deleteBtn = document.querySelectorAll('.deleteButton');
const updateBtn = document.querySelector('.updateButton');

for (const button of editBtn) {
  button.addEventListener('click', (e) => {
    document.getElementById('oldName').value = e.target.dataset.name;
    document.getElementById('oldCount').value = e.target.dataset.count;
    document.getElementById('oldPrice').value = e.target.dataset.price;
    document.getElementById('newName').value = e.target.dataset.name;
    document.getElementById('newCount').value = e.target.dataset.count;
    document.getElementById('newPrice').value = e.target.dataset.price;
  });
}

for (const button of deleteBtn) {
  button.addEventListener('click', (e) => {
    fetch(`/orders`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.dataset.name,
        count: e.target.dataset.count,
        price: e.target.dataset.price,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then(() => {
        window.location.reload();
      });
  });
}

updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/orders', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: document.querySelector('#newName').value,
      count: document.querySelector('#newCount').value,
      price: document.querySelector('#newPrice').value,
      oldName: document.querySelector('#oldName').value,
      oldCount: document.querySelector('#oldCount').value,
      oldPrice: document.querySelector('#oldPrice').value,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(() => {
      window.location.reload();
    });
});