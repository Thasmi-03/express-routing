// Basic server setup
import express from 'express'

const app = express()
const PORT = 3000;

const products = [
    {
        id: 1,
        pname: "rice",
        price: 350
    },
    {
        id: 2,
        pname: "vegi",
        price: 150
    },
    {
        id: 3,
        pname: "sugar",
        price: 300
    }
]

// HTTP method handling
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) return res.status(404).json({ error: 'Product Not found' })
    res.json(product)

    // if (!product) {
    //     res.status(404).json({ error: 'Product Not found' })
    // } else {
    //     res.json(product)
    // }
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});