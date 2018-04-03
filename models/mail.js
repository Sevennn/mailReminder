const nodemailer  = require("nodemailer");
import user from "./config"



const smtpTransport = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 465,
    secureConnection: true,
    auth: {
      user: user.username,
      pass: user.password
  }
});

const mailOptions = {
    from: user.username, // 发送邮箱
    to: user.username, // 接受邮箱
    subject: ``, // 标题
    html: `` // 内容
}

var mailsys = {
    sendmail: (title,des)=>{
        return new Promise((resolve, reject)=>{
            mailOptions.subject = title;
            mailOptions.html = des;
            smtpTransport.sendMail(mailOptions, (err,info)=>{
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(info);
                }
            });
        })
    }
}

export default mailsys

