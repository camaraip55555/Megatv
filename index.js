const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const { username, password } = req.query;
    
    if (username === 'usuario1' && password === '1234') {
        // Configurar cabecera para que el reproductor detecte la lista de canales
        res.setHeader('Content-Type', 'audio/x-mpegurl');
        
        // Formato de lista M3U (reemplaza el enlace final por tu .m3u8 real)
        res.send(`#EXTM3U\n#EXTINF:-1,Megatv\nhttps://tu-enlace-de-streaming-aqui.m3u8`);
    } else {
        res.status(401).send("Usuario o contraseña incorrectos");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
