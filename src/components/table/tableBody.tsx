import { TableBodyProps } from "../../type";

export default function TableBody({ listItem, handleShowDetail }: TableBodyProps) {
    return (
        <>
            {
                listItem.map((item: any) => (
                    <tbody className="tableBody" key={item.ID} onClick={() => handleShowDetail(item)}>
                        <tr>
                            <td>{item.Country}</td>
                            <td>{item.NewRecovered}</td>
                            <td>{item.NewConfirmed}</td>
                            <td>{item.NewDeaths}</td>
                        </tr>
                    </tbody>
                ))
            }
        </>
    )
};
