import express from 'express'
import {
    addWork,
    updateWork,
    deleteWork,
    addHighSchool,
    updateHighSchool,
    deleteHighSchool,
    deleteAbout,
    updateAbout

} from './about.controller'
export const aboutRouter = express.Router();

aboutRouter.post("/addWork",addWork);
aboutRouter.post("/updateWork",updateWork);
aboutRouter.post("/deleteWork",deleteWork);

aboutRouter.post("/addHighSchool",addHighSchool);
aboutRouter.post("/updateHighSchool",updateHighSchool);
aboutRouter.post("/deleteHighSchool",deleteHighSchool);

aboutRouter.post("/updateAbout",updateAbout)
aboutRouter.post("/deleteAbout",deleteAbout)
