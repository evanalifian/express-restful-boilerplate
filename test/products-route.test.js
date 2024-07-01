import { app } from "../src/app.js";
import supertest from "supertest";
import {
  fetchAllProducts,
  fetchAllProductsById,
} from "../src/utils/test-products.js";

describe("GET: /api/products", () => {
  it("should fetch all products", async () => {
    const products = await fetchAllProducts();
    const res = await supertest(app).get("/api/products");

    expect(res.status).toEqual(200);
    expect(res.body.data).toEqual(products);
  });

  it("should reject if request is not falid", async () => {
    const res = await supertest(app).get("/products");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("API endpoint is not available");
  });
});

describe("GET: /api/products/:productID", () => {
  it("should fetch product by id", async () => {
    const products = await fetchAllProductsById();
    const res = await supertest(app).get("/api/products/17");
    
    expect(res.status).toBe(200);
    expect(res.body.data.code).toBe(products.code);
    expect(res.body.data.type).toBe(products.type);
    expect(res.body.data.name).toBe(products.name);
    expect(res.body.data.price).toBe(products.price);
  });
  
  it("should reject if product is not found", async () => {
    const res = await supertest(app).get("/api/products/1");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Product is not found");
  });
});
