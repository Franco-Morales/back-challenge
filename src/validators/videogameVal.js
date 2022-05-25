import { check } from "express-validator";

import {  validate } from "./validate";


export const videogameVal = [
    check("title")
        .notEmpty()
        .withMessage("Title is required"),
    check("desc")
        .notEmpty()
        .withMessage("Description is required"),
    check("developer")
        .notEmpty()
        .withMessage("Developer is required"),
    check("characters")
        .notEmpty()
        .withMessage("Characters are required")
        .isArray({ min: 3, max: 6 })
        .withMessage("At least 3 and no more than 6 characters"),
    check("release")
        .notEmpty()
        .withMessage("Release date is required"),
    check("category")
        .notEmpty()
        .withMessage("Category is required"),
    check("cover")
        .notEmpty()
        .withMessage("Cover picture is required"),
    (req, res, next) => validate(req, res, next)
];