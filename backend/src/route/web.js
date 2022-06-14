import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        res.send('Server is up and running');
    });

    router.post('/post-crud', homeController.getCRUD);
    router.get('/get-all-users', homeController.getAllUsers);
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;