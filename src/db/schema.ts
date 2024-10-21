//https://medium.com/@arashramy/simple-e-commerce-database-schema-in-sql-server-360da0502a6a
//https://fabric.inc/blog/commerce/ecommerce-database-design-example
//https://vertabelo.com/blog/er-diagram-for-online-shop/

import { text, integer, pgTable, uuid, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

import { serial } from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";
import { numeric } from "drizzle-orm/sqlite-core";


export const product = pgTable("product", {
  productId: uuid("productId")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: varchar("name").notNull(),
  price: varchar("price").notNull(),
  company: varchar("company").notNull(),
  productCat: varchar("productCat").notNull(),
  productDesc: varchar("productDesc").notNull(),
  image: varchar("image").notNull(),
  featured: varchar("featured").notNull(),
});

export const userRoles = pgEnum('role', ['admin', 'maintainer','user']);

export const user = pgTable("user", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  registerdate:timestamp('registerdate').notNull().defaultNow(),
  isVerfied: varchar("isVerfied"),
  role: userRoles('role').default('user').notNull(),
  forgotPasswordToken: varchar("forgotPasswordToken"),
  forgotPasswordTokenExpiry: timestamp('forgotPasswordTokenExpiry', { mode: 'string' }),
  verifyToken: varchar("verifyToken"),
  verifyTokenExpiry: timestamp('verifyTokenExpiry', { mode: 'string' })
});


export const orderHeader = pgTable("orderHeader",{
  orderHeaderId: serial('id').primaryKey(),
  userId: uuid("userId").references(() => user.id),// reference to customer/user
  orderDate: timestamp("orderDate").notNull().defaultNow(),
  totalAmount: varchar("totalAmount"),
  shipingID: integer("shipingID"),
  ShippingAddressID: integer("ShippingAddressID"),
  BillingAddressID: integer("BillingAddressID"),
  orderStatus: varchar("orderStatus"),// -- Pending, Shipped, Delivered, etc.

})
export const orderDetail = pgTable("orderDetail",{
    orderDetailId: serial('orderDetailId').primaryKey(),
    orderId: integer("orderId").references(()=>orderHeader.orderHeaderId),
    productId: uuid("productId").references(()=>product.productId),
    quantity: integer("quantity"),
    subtotal: integer("subtotal"),


})


// CREATE TABLE Address (
//   AddressID INT PRIMARY KEY,
//   CustomerID INT,
//   AddressLine1 NVARCHAR(255) NOT NULL,
//   AddressLine2 NVARCHAR(255),
//   City NVARCHAR(50),
//   State NVARCHAR(50),
//   ZipCode NVARCHAR(15),
//   PRIMARY KEY (AddressID),
//   FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
// );



export const address = pgTable("address",{

  addressId: serial('addressId').primaryKey(),
  userId: uuid('userId').references(()=>user.id),
  addressLine1: varchar('addressLine1').notNull(),
  addressLine2: varchar('addressLine2'),
  city: varchar('city'),
  state: varchar('state'),
  zipcode: varchar('zipcode'),

})















// export const customer = pgTable("customer",{
// id: uuid("customerId").default(sql`gen_random_uuid()`).primaryKey(),
// customerNmae


// })


// export const user1 = pgTable("user1",{

//     name: varchar("name"),

// })
