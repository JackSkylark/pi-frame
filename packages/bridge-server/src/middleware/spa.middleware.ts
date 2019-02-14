import { buildMiddleware } from "@pi-frame/nest-spa-middleware";
import { PUBLIC_DIR } from "../constants";

export default buildMiddleware({
    pathToPublicDir: PUBLIC_DIR
});
