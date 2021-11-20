export default function handler(req, res) {

    const code = req.query.code

    res.status(200).json({
        id: code,
        name: `Erick ${code}`,
        email: `erick${code}@mail.com`
    })
}