import { Country, hookSortListProps } from "../type"

export default function useSortList({ currentList, setCurrentList }: hookSortListProps) {
    const handleSort = (name: string) => {
        if (name && name !== '') {
            const sorted: Array<Country> = [...currentList].sort((a, b) => {
                switch (name) {
                    case 'recovered':
                        return a.NewRecovered - b.NewRecovered
                    case 'confirmed':
                        return b.NewConfirmed - a.NewConfirmed
                    default:
                        return b.NewDeaths - a.NewDeaths
                }
            })
            setCurrentList(sorted)
        }
    }
    return { handleSort }
};
