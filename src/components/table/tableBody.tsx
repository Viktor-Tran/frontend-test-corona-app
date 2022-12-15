import { TableBodyProps } from "../../type";

export default function TableBody({ listItem }: TableBodyProps) {
    return (
        <>
            {
                listItem.map(item => (
                    <tbody key={item.ID}>
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
