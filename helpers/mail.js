import nodemailer from 'nodemailer'

// Generate SMTP service account from ethereal.email



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

        //<p>Regarding my financial situation, I would like to inform you that I have [tuitionFeeStatus] been granted tuition fee assistance. However, I am committed to covering my tuition fees and living expenses during my studies. I have saved [tuitionFee] for tuition fees and [gicFee] for the Guaranteed Investment Certificate (GIC).</p>


// async..await is not allowed in global scope, must use a wrapper
async function send_mail(form) {
    const mailOptions = {
        from: `${process.env.EMAIL_USER}`, // sender address
        to: form.email, // list of receivers
        subject: "Statement of Purpose", // Subject line
        html: `
        <h2>Statement of Purpose</h2>
        <p>Dear Admissions Committee,</p>
    
        <p>I am writing to express my strong interest in pursuing a program of study at ${form.canadaInstitueName}. My name is <strong>${form.fullname}</strong>, and I am currently ${form.age} years old. I hold a ${form?.highestLevelOfEducation?.edu} degree from ${form.institueForHLE}, where I completed a degree in ${form.course}.</p>
    
        <p>During my academic journey, I have gained valuable knowledge and skills that have prepared me for the challenges of higher education. Additionally, ${form.workexp}, which has provided me with practical insights into my chosen field of study.</p>
    
        <p>I am particularly interested in studying at ${form.canadaInstitueName} because of its outstanding reputation in ${form.canadaInstitueCourse}. I believe that the academic environment and resources available at your institution will greatly contribute to my personal and professional growth.</p>
    
        <p>My goal is that ${form.futureGoals}, and I am confident that pursuing a degree at ${form.canadaInstitueName}. will be a significant step toward achieving this goal. Moreover, I have achieved strong English language proficiency, with scores of:</p>
    
        <ul>
            <li>Listening: ${form.englishScoresListening}</li>
            <li>Writing: ${form.englishScoresWriting}</li>
            <li>Reading: ${form.englishScoresReading}</li>
            <li>Speaking: ${form.englishScoresSpeaking}</li>
        </ul>    
        <p>Thank you for considering my application. I am excited about the prospect of studying at ${form.canadaInstitueName}, and I look forward to the opportunity to contribute to the academic community.</p>
    
        <p>Sincerely,</p>
        <p><strong>${form.fullname}</strong></p>
        <p>Email: ${form.email}</p>
        <p>Origin Country: ${form.originCountry}</p>
    </body>
    </html>
        `, // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            throw new error("failed")
        } else {
            console.log('Email sent: ' + info.response);
            // do something useful
        }
    });
}

export {
    send_mail
}
