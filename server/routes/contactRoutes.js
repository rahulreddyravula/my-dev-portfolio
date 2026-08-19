import express from 'express';
import { createContact } from '../controllers/contactController.js';
import { validateContactInput } from '../validators/contactValidator.js';

const router = express.Router();

router.post('/contact', validateContactInput, createContact);

export default router;
