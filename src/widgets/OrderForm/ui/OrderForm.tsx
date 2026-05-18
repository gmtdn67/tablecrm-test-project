import { ContragentSearch } from "@/features/contragentSearch/ui/ContragentSearch";
import { OrganizationSelect } from "@/features/organizationSelect/ui/OrganizationSelect";
import { PayboxSelect } from "@/features/payboxSelect/ui/PayboxSelect";
import { PriceTypeSelect } from "@/features/pricetypeSelect/ui/PriceTypeSelect";
import { WarehouseSelect } from "@/features/warehouseSelect/ui/WarehouseSelect";
import { ProductsWidget } from "@/widgets/ProductsList/ui/ProductsWidget";
import { StickyCartWidget } from "@/widgets/StickyCartWidget/ui/StickyCardWidget";

export function OrderForm() {
    return (
        <div className="space-y-4 p-4"> 
            <ContragentSearch />
            <OrganizationSelect />
            <PayboxSelect />
            <WarehouseSelect />
            <PriceTypeSelect />
            <ProductsWidget />
            <StickyCartWidget />
        </div>
    )
}