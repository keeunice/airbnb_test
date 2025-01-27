// const express = require('express');
// const app = express();
// const port = 3000

// // 啟用 JSON 請求解析
// app.use(express.json());

// // 簡單的 GET API
// app.get('/api/users', (req, res) => {
//     const users = [
//         { id: 1, name: 'Alice' },
//         { id: 2, name: 'Bob' }
//     ];
//     res.json(users);
// });

// //start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// const mongoose = require('mongoose');

// // 正確的 MongoDB Atlas 連接字串（檢查是否正確）
// const uri = 'mongodb+srv://eunice001234:Eunice940106@cluster0.h5q8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// // 嘗試連線並提供詳細的錯誤資訊
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connected successfully!");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message); // 顯示錯誤訊息
//   });

// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err.message);
// });

// // 處理未捕捉的錯誤
// process.on('uncaughtException', (err) => {
//   console.error('未捕捉的例外:', err.message);
//   process.exit(1);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('未處理的 Promise 拒絕:', reason);
//   process.exit(1);
// });
