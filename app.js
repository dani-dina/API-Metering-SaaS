import request from "supertest";
import app from "../app.js";

request(app).get("/health");
