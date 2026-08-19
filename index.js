const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const { username, password } = req.query;
    
    if (username === 'usuario1' && password === '1234') {
        res.json({
            status: "activo",
            usuario: username,
            canal: "Megatv",
            stream_url: "https://tu-enlace-de-streaming-aqui.m3u8"
        });
    } else {
        res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
