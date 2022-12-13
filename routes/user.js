import {Router} from "express";
import {getAll} from "../controllers/user.js";
import {paginatedResults} from "../middleweare/paginationResult.js";

import User from "../Model/User.js";

const router = new Router()


router.get('', paginatedResults(User), getAll)


export default router