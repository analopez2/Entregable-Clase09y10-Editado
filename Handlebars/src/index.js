import express from 'express';
import { productRouter } from './routers/productRouter.js';
import handlebars from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: path.join(__dirname, '../', 'views/layouts'),
    partialsDir: path.join(__dirname, '../', '/views/partials/'),
  })
);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', productRouter);

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(PORT, () => `Server running on port ${PORT}`);
