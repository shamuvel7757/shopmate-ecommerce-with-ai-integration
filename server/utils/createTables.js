import { createOrderItemTable } from "../models/orderItemsTable.js";
import { createOrdersTable } from "../models/ordersTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";
import { createProductReviewsTable } from "../models/productReviewsTable.js";
import { createProductsTable } from "../models/productsTable.js";
import { createShippingInfoTable } from "../models/shippingInfoTable.js";
import { createUserTable } from "../models/userTable.js";


export const createTable = async () => {
  try {
    await createOrderItemTable();
    await createOrdersTable();
    await createPaymentsTable();
    await createProductReviewsTable();
    await createProductsTable();
    await createShippingInfoTable();
    await createUserTable();
    console.log("All tables created successfully");
  } catch (error) {
    console.log(" shamuvel - Error creating tables", error);
  }
};
