import mail from "./models/mail"

mail.sendmail("hhh").then(r=>console.log(r)).catch(r=>console.log(r));
