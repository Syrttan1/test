document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.getElementById('refreshBtn');
    const userList = document.getElementById('userList');
  
    refreshBtn.addEventListener('click', fetchUsers);
  
    fetchUsers();
  
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        displayUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        userList.innerHTML = '<p>Error fetching users. Please try again later.</p>';
      }
    }
  
    function displayUsers(users) {
      userList.innerHTML = '';
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        userList.appendChild(card);
      });
    }
  });
  