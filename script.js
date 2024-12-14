const baseUrl = 'http://localhost:5000/api/users'; // Update the URL to your backend

// Fetch users from the new API
async function getUsers() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  displayUsers(data);
}

// Create or update user
async function saveUser(userData, userId) {
  const method = userId ? 'PUT' : 'POST';
  const url = userId ? `${baseUrl}/${userId}` : baseUrl;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  const data = await response.json();
  console.log(`${method === 'POST' ? 'Created' : 'Updated'} User:`, data);
  return data;
}



// Delete user
async function deleteUser(userId) {
  try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
          method: 'DELETE'
      });
      if (response.status === 204) {
          console.log('Deleted User:', userId);
          getUsers(); // Refresh the user list
      } else {
          console.error('Failed to delete user:', response.status);
      }
  } catch (error) {
      console.error('Failed to delete user:', error);
  }
}


// Edit user
function editUser(id, name, email, gender, status) {
  document.getElementById('userId').value = id;
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('gender').value = gender;
  document.getElementById('status').value = status;
  document.getElementById('submitButton').textContent = 'Update User';
}
