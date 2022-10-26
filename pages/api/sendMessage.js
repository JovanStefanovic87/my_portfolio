import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const messageData = req.body.messageData
  try {
    await sendgrid.send({
      to: "jovanstefanovic024@gmail.com",
      from: "zbni.rs@gmail.com",
      subject: `[Lead from website] : ${messageData.subject}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Portfolio</title>
        <meta name="Personal web page" content="Portfolio">
        <meta name="Jovan Stefanovic" content="Portfolio">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div>
              <h3>You've got a new mail from ${messageData.fullname}<br/> 
              <h3>Their email is: ${messageData.email} </h3>
              <h3>Their phone number is: ${messageData.phone} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${messageData.message}</p>
              <br>
              </div>
              <p style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Jovan Stefanovic<br>Front-end developer<br>+381691120296</p>
              <div style="display: flex;justify-content: center;align-items: center;">
                <a href="https://github.com/JovanStefanovic87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.linkedin.com/in/jovanstefanovic87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;