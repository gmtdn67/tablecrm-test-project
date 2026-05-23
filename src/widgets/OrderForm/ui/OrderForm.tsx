import { ContragentSearch } from "@/features/contragentSearch/ui/ContragentSearch";
import { OrganizationSelect } from "@/features/organizationSelect/ui/OrganizationSelect";
import { PayboxSelect } from "@/features/payboxSelect/ui/PayboxSelect";
import { PriceTypeSelect } from "@/features/pricetypeSelect/ui/PriceTypeSelect";
import { WarehouseSelect } from "@/features/warehouseSelect/ui/WarehouseSelect";
import { CartWidget } from "@/widgets/CartWidget/ui/CartWidget";
import { ProductsWidget } from "@/widgets/ProductsList/ui/ProductsWidget";

export function OrderForm() {
    return (
        <div className="space-y-4 p-4"> 
            <ContragentSearch />
            <OrganizationSelect />
            <PayboxSelect />
            <WarehouseSelect />
            <PriceTypeSelect />
            <ProductsWidget />
            <CartWidget />
        </div>
    )
}