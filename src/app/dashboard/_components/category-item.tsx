"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { categoryProps } from './categories'
import { cn } from '@/lib/utils'
import qs from "query-string"

const CategoryItem = ({ name, value } : categoryProps) => {

    const pathname = usePathname();
    const router = useRouter();
    const searchParam = useSearchParams();

    const currentCategory = searchParam.get('category');

    const isSelected = currentCategory === value;

    const handleOnClick = () => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                category: isSelected ? null : value,
            }
        }, { skipNull: true, skipEmptyString: true })

        router.push(url);
    }

  return (
    <button onClick={handleOnClick} className={cn("py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer")}>
        {name}
    </button>
  )
}

export default CategoryItem
