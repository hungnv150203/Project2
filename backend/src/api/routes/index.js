import { router as productRouter} from './product.js'
import { router as userRouter} from './user.js'
import { router as brandRouter } from './brand.js';
import { router as cartRouter} from './cart.js';
import { router as addressRouter } from './address.js';

function route(app) {
    app.use('/product', productRouter);
    app.use('/user', userRouter);
    app.use('/cart', cartRouter)
    app.use('/brand', brandRouter);
    app.use('/address', addressRouter)
}

export { route };