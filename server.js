import express from 'express'; // подключаем пакет express, который упрощает разработку сервера
import bodyParser from 'body-parser'; // подключаем пакет для преобразований текста в javascript объект и наоборот
import cors from 'cors';
import {serverPort} from "./config.json"; // подключаем файл конфигураций сервера

// инициализируем эспресс приложение
const app = express();

// используем модуль для парсинга, чтобы не делать этого вручную
app.use(bodyParser.json());

// загрузка файлов клиентской части
app.use(express.static(__dirname));

// разрешаем запросы любого происхождения
app.use(cors({ origin: '*' }));

// API
// прописываем обработчики по RESTful

// GET Получение документа по идентификатору
app.get('/api/v1/phone/:id', (req, res) => {
    res.sendFile(`${__dirname}/api/phones/${req.params.id}.json`)
});

// GET Получение всех документов списком
app.get('/api/v1/phones', (req, res) => {
    res.sendFile(`${__dirname}/api/phones.json`);
    // res.send("new");
});


// Для запуска сервера испульзуем команду babel-node server.js
const server = app.listen(serverPort, () => {
    console.log(`Сервер запущен и работает через порт ${serverPort}`);
});