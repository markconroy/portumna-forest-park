const emails = [
  'Daithi.Deforge@coillte.ie',
  'paul.murray@coillte.ie',
  'padraig.ohuallachain@coillte.ie',
  'paddy.mathews@failteireland.ie',
  'fiona.dunne@failteireland.ie',
  'grainne.cornally@failteireland.ie',
  'fiona.fitzgerald@failteireland.ie',
  'sean.canney@oireachtas.ie',
  'albert.dolan@oireachtas.ie',
  'louis.ohara@oireachtas.ie',
  'peter.roche@oireachtas.ie',
  'anne.rabbitte@oireachtas.ie',
  'shane.curley@oireachtas.ie',
  'icanning@cllr.galwaycoco.ie',
  'mregan@cllr.galwaycoco.ie',
  'gdonohue@cllr.galwaycoco.ie',
  'gfinnerty@cllr.galwaycoco.ie',
  'dnkelly@cllr.galwaycoco.ie',
  'pkillilea@cllr.galwaycoco.ie',
  'mkinane@cllr.galwaycoco.ie',
  'mmaher@cllr.galwaycoco.ie',
  'jmcclearn@cllr.galwaycoco.ie',
  'lharney@cllr.galwaycoco.ie'
]

const form = document.querySelector('form');
const yourNameInput = form.querySelector('#your-name');
const yourEmailInput = form.querySelector('#your-email');
const yourTownInput = form.querySelector('#your-town');
const messagdeSubjectInput = form.querySelector('#message-subject');
const messageBodyInput = form.querySelector('#message');

const yourNames = document.querySelectorAll('.your-name');
yourNames.forEach(name => {
  name.textContent = yourNameInput.value;
});
yourNameInput.addEventListener('input', function() {
  yourNames.forEach(name => {
    name.textContent = yourNameInput.value;
  });
});

const yourTowns = document.querySelectorAll('.your-town');
yourTowns.forEach(town => {
  town.textContent = yourTownInput.value;
});
yourTownInput.addEventListener('input', function() {
  yourTowns.forEach(town => {
    town.textContent = yourTownInput.value;
  });
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const yourEmail = yourEmailInput.value.trim();
  const messageSubject = messagdeSubjectInput.value.trim();
  const messageBody = messageBodyInput.textContent.trim();

  const emailContent = `${messageBody}`;

  // Create a mailto link to open the user's email client with the pre-filled content
  // Adds all email addresses as recipients to the BCC field
  const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(messageSubject)}&body=${encodeURIComponent(emailContent)}&bcc=${emails.join(',')}`;
  window.location = mailtoLink;

  alert('Opening your email client!');
  form.reset();
});
