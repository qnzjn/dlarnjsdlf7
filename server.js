const express = require('express');
const path = require('path');
const app = express();

// 포트 번호를 환경변수에서 가져오거나 기본값 사용
const port = process.env.PORT || 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(port, () => {
    const actualPort = server.address().port;
    console.log(`서버가 http://localhost:${actualPort} 에서 실행 중입니다`);
}); 