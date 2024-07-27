const form = document.getElementById('student-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const student = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    id: form.id.value,
    semester: form.semester.value,
  };

  try {
    const res = await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    const data = await res.json();
    console.log('Student added:', data);
  } catch (err) {
    console.error('Error:', err);
  }
});
