import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import ErrorHandler from './helpers/error-handler';
import productRoutes from "./routes/product.routes";

class App {
    private readonly app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || "3000");
        this.init();
    }

    private init() {
        this.setupConfiguration();
        this.setupMiddlewares();
        this.configureRoutes();
        this.configureErrorHandling();
    }

    private setupConfiguration() {
        // new Database();
    }

    private setupMiddlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private configureRoutes() {
        this.app.use("/api/v1/products", productRoutes)
    }

    private configureErrorHandling() {
        this.app.use(ErrorHandler.notFound);
        this.app.use(ErrorHandler.serverError);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost: ${this.port}`);
        });
    }
}


export default App;