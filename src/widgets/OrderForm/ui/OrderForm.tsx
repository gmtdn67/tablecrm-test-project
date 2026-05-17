import { ContragentSearch } from "@/features/contragentSearch/ui/ContragentSearch";
import { OrganizationSelect } from "@/features/organizationSelect/ui/OrganizationSelect";
import { PayboxSelect } from "@/features/payboxSelect/ui/PayboxSelect";

export function OrderForm() {
    return (
        <div className="space-y-4 p-4"> 
            <ContragentSearch />
            <OrganizationSelect />
            <PayboxSelect />
        </div>
    )
}