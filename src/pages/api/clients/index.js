export default function handler(req, res) {
    if(req === 'GET') {
        handleGET(req, res)
    } else {
        res.status(405).send()
    }
}

function handleGET(req, res) {
    res.status(200).json({
        id: 1,
        name: 'Erick',
        idade: 21
    })
}