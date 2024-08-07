import { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer"

export const runtime = 'edge';

export default function contactHandler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === "POST") {
        const { email, name, subject ,message } = req.body
        const transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",       
            port: 587,
            secure: false,
            service: "gmail",
            auth: {
                user:process.env.NEXT_PUBLIC_MAIN_ACCOUNT,
                pass:process.env.NEXT_PUBLIC_MAIN_PASS,        
            }
        })
    
        const mailOptions = {
            from:process.env.NEXT_PUBLIC_MAIN_ACCOUNT,
            to: "e-mail",
            subject: "ポートフォリオお問い合わせ",
            text: `名前: ${name} \n\nメールアドレス: ${email}  \n\n件名: ${subject} \n\nメッセージ: ${message}`
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return res.json({message: "失敗しました"})
            }else{
                return res.json({message: "成功しました"})
            }
        })
    }
}