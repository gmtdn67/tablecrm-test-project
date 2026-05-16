import { ContragentSearch } from "@/features/contragentSearch/ui/ContragentSearch";
import { OrganizationSelect } from "@/features/organizationSelect/ui/OrganizationSelect";

export function OrderForm() {
    return (
        <div className="space-y-4 p-4"> 
            <ContragentSearch />

            <OrganizationSelect />
        </div>
    )
}