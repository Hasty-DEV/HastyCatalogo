import { setupExpress } from "./loaders/Express/Express.loader";

class Server {
    public StartServer() {
        setupExpress();
    }
}

export default new Server();