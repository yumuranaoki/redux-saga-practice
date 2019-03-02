import * as express from 'express';

const app = express();

app.use(express.static('dist'))

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('index')
})

app.listen(8000, () => {
  console.log('app is running')
})