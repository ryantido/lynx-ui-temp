import { Invoice } from "@/types";
import { CircleCheckBig, Clock2, Euro, XCircle } from "lucide-react";

export const INVOICES: Invoice[] = [
  {
    id: "1",
    number: "INV-2025-001",
    client: "Chanax S.A.S",
    amount: 2450,
    status: "paid",
    date: "2025-01-15",
    dueDate: "2025-02-15",
  },
  {
    id: "2",
    number: "INV-2025-002",
    client: "Hilton Hotel",
    amount: 3200,
    status: "pending",
    date: "2025-01-18",
    dueDate: "2025-02-18",
  },
  {
    id: "3",
    number: "INV-2025-003",
    client: "SNDP",
    amount: 1890,
    status: "paid",
    date: "2025-01-20",
    dueDate: "2025-02-20",
  },
  {
    id: "4",
    number: "INV-2025-004",
    client: "Petrolium",
    amount: 4500,
    status: "overdue",
    date: "2024-12-20",
    dueDate: "2025-01-20",
  },
  {
    id: "5",
    number: "INV-2025-005",
    client: "Rebuild Agency",
    amount: 2100,
    status: "pending",
    date: "2025-01-22",
    dueDate: "2025-02-22",
  },
] as const;

export const STATS = [
  {
    title: "Total facturé",
    value: "14,140€",
    icon: Euro,
    color: "var(--brand-indigo)",
    change: "+12.5%",
  },
  {
    title: "Payées",
    value: "4,340€",
    icon: CircleCheckBig,
    color: "var(--semantic-success)",
    count: "2 factures",
  },
  {
    title: "En attente",
    value: "5,300€",
    icon: Clock2,
    color: "var(--semantic-warning)",
    count: "2 factures",
  },
  {
    title: "En retard",
    value: "4,500€",
    icon: XCircle,
    color: "var(--semantic-error)",
    count: "1 facture",
  },
] as const;
