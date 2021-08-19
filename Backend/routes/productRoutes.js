import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controller/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProduct).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
