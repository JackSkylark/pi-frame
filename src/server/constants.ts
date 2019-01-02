import * as path from "path";
import { Injectable } from "@nestjs/common";

export const STARTUP_CONFIG_PATH = path.join(__dirname, "startup.config.json");
export const APP_CONFIG_PATH = path.join(__dirname, "app.config.json");
export const IMAGE_DIR_PATH = path.join(__dirname, "images");



