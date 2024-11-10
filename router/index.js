import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("index", {title: "Home"});
})

router.get("/portfolio", (req, res) => {
	res.render("portfolio", {title: "Home"});
})
router.get("/404", (req, res) => {
	res.render("404", {title: "404"});
})

export default router;