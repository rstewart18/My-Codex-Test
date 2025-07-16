// src/data/projects.js
import { v4 as uuidv4 } from "uuid";
import { dropdownProgress } from "./dropdown";
import { mockClients } from "./clients";

const generateRandomDate = () => Math.floor(Math.random() * 100).toString().padStart(2, '0') + (Math.floor(Math.random() * 9) + 1) + (Math.floor(Math.random() * 9) + 1) + Math.floor(Math.random() * 1000).toString().padStart(3, '0');

export const mockProjects = Array.from({ length: 200 }).map((_, i) => {
  const randomStage = dropdownProgress[Math.floor(Math.random() * dropdownProgress.length)];
  const random = generateRandomDate();
  const client = mockClients[Math.floor(Math.random() * mockClients.length)];
  return {
    id: random,
    name: `Project ${i + 1}`,
    number: random,
    stage: randomStage.name,
    stage_id: randomStage.id,
    clientId: client.id,
    clientOrganization: client.name,
    billOfMaterials: Math.floor(Math.random() * 4000) + 1000,
    isArchive: Math.random() < 0.5,
  };
});