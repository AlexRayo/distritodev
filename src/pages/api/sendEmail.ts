import sgMail from '@sendgrid/mail';

export default async (req:any, res:any) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // Establecer las credenciales de SendGrid
            sgMail.setApiKey("apiKey");

            // Crear el mensaje de correo electrónico
            const msg = {
                to: 'companny@gmail.com',
                from: {
                    email: 'client@gmail.com',
                    name: name,
                },
                subject: 'Nuevo mensaje de contacto',
                text: `
            Nombre: ${name}
            Email: ${email}
            Mensaje: ${message}
        `,
            };

            await sgMail.send(msg);

            res.status(200).json({ message: '¡Mensaje enviado correctamente!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocurrió un error al enviar el mensaje' });
        }
    } else {
        res.status(405).end();
    }
};
