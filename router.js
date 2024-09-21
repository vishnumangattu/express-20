import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router();
router.route("/adddonor").post(rh.addDonors);
router.route("/getdonors").get(rh.getDonors);
router.route("/getdonor/:id").get(rh.getDonor);
router.route("/editdonor/:_id").put(rh.editDonor);
router.route("/deletedonor/:_id").delete(rh.deleteDonor)
export default router;