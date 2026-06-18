
import { Application } from "../db/index";
import applicationRepo from "../repository/application.repo";
import CrudService from "./curd.service";

class ApplicationService extends CrudService<Application> {
    constructor() {
        super(applicationRepo);
    }
}

const applicationSVC = new ApplicationService();
export default applicationSVC;