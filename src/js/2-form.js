let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  formData = JSON.parse(savedFormData);
  form.elements['email'].value = formData.email || '';
  form.elements['message'].value = formData.message || '';
}

form.addEventListener('input', () => {
  formData.email = form.elements['email'].value.trim();
  formData.message = form.elements['message'].value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }
  console.log('Form submitted', formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
});
