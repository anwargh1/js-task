const dataList = document.getElementById('List');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.map(item => {
      const li = document.createElement('li');
      li.textContent = `${item.id}: ${item.title} +${item.body}`;
      dataList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });