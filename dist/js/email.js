const mail = {
  subject: "",
  body: "",
};

const subject = document.querySelector("#subject");
const content = document.querySelector("#content");

function change() {
  mail.subject = subject.value;
  mail.body = content.value;
}

function clickHandleEmail() {
  location.href = `mailto:zoneandika@gmail.com?subject=${mail.subject}&body=${mail.body}`;
}
