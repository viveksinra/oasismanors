import { AuthService } from "./auth.service";
import { DashboardService } from "./dashboard.service";
import { CustomerService } from "./customer.service";
import { ProspectService } from "./prospect.service";
import { EmployeeService } from "./employee.service";
import { ResidentService } from "./resident.service";
import { MedicationService } from "./medication.service";
import { CareService } from "./care.service";
import { LedgerService } from "./ledger.service";
import { PayReceiveService } from "./payReceive.service";
import { InvoiceService } from "./invoice.service";
import { AccessService } from "./access.service";

import { API_ENDPOINT } from "../utils/index";

export const authService = new AuthService(API_ENDPOINT);
export const dashboardService = new DashboardService(API_ENDPOINT);
export const customerService = new CustomerService(API_ENDPOINT);
export const prospectService = new ProspectService(API_ENDPOINT);
export const employeeService = new EmployeeService(API_ENDPOINT);
export const residentService = new ResidentService(API_ENDPOINT);
export const medicationService = new MedicationService(API_ENDPOINT);
export const careService = new CareService(API_ENDPOINT);
export const ledgerService = new LedgerService(API_ENDPOINT);
export const payReceiveService = new PayReceiveService(API_ENDPOINT);
export const invoiceService = new InvoiceService(API_ENDPOINT);
export const accessService = new AccessService(API_ENDPOINT);
