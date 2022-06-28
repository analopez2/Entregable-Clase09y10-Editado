import express from 'express';
import { productRouter } from './routers/productRouter.js';

const app = express();
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', productRouter);

app.get('/', (req, res) => {
  res.render('form');
});

app.listen(PORT, () => `Server running on port ${PORT}`);
