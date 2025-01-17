//-- routes/users.ts   
import { Router } from "../dependences.ts";
import {
  loginUser,
  getUsers, 
  updateUser,
} from "../controllers/UserController.ts";
import { authMiddleware } from "../middleware/auth.ts";

const router = new Router();

router.get("/api/v1/users", getUsers); 
router.post("/api/v1/users/login", loginUser); 
router.put("/api/v1/users/:id", updateUser); 

export default router;