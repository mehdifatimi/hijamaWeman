fetch('http://localhost:3002')
    .then(res => console.log('HTTP Status:', res.status))
    .catch(err => console.error('Connection Error:', err));
