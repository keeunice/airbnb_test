// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000

// app.use(express.json());

// // 連接 MongoDB
// mongoose.connect('mongodb+srv://eunice001234:aRFZksn4rDaxgSSS@cluster0.h5q8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB connected successfully!");
// }).catch((err )=> {
//     console.error("MongoDB connection error:", err);
// });


// // 定義購物車 Schema
// const cartSchema = new mongoose.Schema({
//     userId: String,
//     cartItems: [
//         {
//             item: String,
//             size: String,
//             sugar: String,
//             ice: String,
//             price: Number,
//             quantity: Number
//         }
//     ],
//     timestamp: { type: Date, default: Date.now }
// });

// const Cart = mongoose.model('Cart', cartSchema);

// // 接收購物車同步請求
// app.post('/api/cart', async (req, res) => {
//     const { cartItems } = req.body;

//     if (!cartItems || cartItems.length === 0) {
//         return res.status(400).json({ message: '購物車是空的' });
//     }

//     try {
//         // 儲存購物車，這裡不需要 userId
//         const newCart = new Cart({
//             cartItems,
//             timestamp: new Date(),
//         });

//         await newCart.save();
//         res.status(200).json({ message: '購物車已成功存入資料庫' });
//     } catch (error) {
//         res.status(500).json({ message: '儲存失敗', error });
//     }
// });


// // 啟動伺服器
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// 使用環境變量管理 MongoDB 連接字串
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://eunice001234:Eunice940106@cluster0.h5q8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// 連接 MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

// 定義購物車 Schema
const cartSchema = new mongoose.Schema({
    userId: String,
    cartItems: [
        {
            item: String,
            size: String,
            sugar: String,
            ice: String,
            price: Number,
            quantity: Number
        }
    ],
    timestamp: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);

// 接收購物車同步請求
app.post('/api/cart', async (req, res) => {
    console.log("Received request to /api/cart with body:", req.body);
    
    const { cartItems } = req.body;

    if (!cartItems || cartItems.length === 0) {
        console.error("購物車是空的");
        return res.status(400).json({ message: '購物車是空的' });
    }

    try {
        // 儲存購物車，這裡不需要 userId
        const newCart = new Cart({
            cartItems,
            timestamp: new Date(),
        });

        await newCart.save();
        console.log("購物車已成功存入資料庫");
        res.status(200).json({ message: '購物車已成功存入資料庫' });
    } catch (error) {
        console.error("儲存失敗:", error);
        res.status(500).json({ message: '儲存失敗', error });
    }
});

// 啟動伺服器
app.listen(port, (err) => {
    if (err) {
        console.error("伺服器啟動失敗:", err);
    } else {
        console.log(`Server running at http://localhost:${port}`);
    }
});