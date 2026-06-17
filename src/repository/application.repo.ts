

import { Application } from '../db/index';
import CrudRepo from './curd.repo';

class ApplicationRepo extends CrudRepo<Application> {
  constructor(){
    super(Application)
  }

}

export default ApplicationRepo; 