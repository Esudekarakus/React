import { useState } from 'react';

export default function Page05() {
    const DATA_EMPLOYEES = [
        { id: 1, name: "Reyhan", department: "Arkayüz", education: "Bachelor", wage: "", regular: false },
        { id: 2, name: "Harun", department: "Önyüz", education: "Bachelor", wage: "", regular: true },
        { id: 3, name: "Hale", department: "Arkayüz", education: "Bachelor", wage: "", regular: true },
        { id: 4, name: "Esma", department: "Arkayüz", education: "Bachelor", wage: "", regular: false },
        { id: 5, name: "Ayşe", department: "Arkayüz", education: "Bachelor", wage: "", regular: true },
        { id: 6, name: "Burak", department: "Arkayüz", education: "Bachelor", wage: "", regular: false },
        { id: 7, name: "Deneme7", department: "Arkayüz", education: "Bachelor", wage: "", regular: true },
        { id: 8, name: "Deneme8", department: "Arkayüz", education: "Bachelor", wage: "", regular: false },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [showOnlyRegular, setShowOnlyRegular] = useState(false);

    const renderEmployees = (employees, title) => {
        return (
            <>
                <tr>
                    <th colspan="10">{title}</th>
                </tr>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.regular ? "var" : "yok"}</td>
                        <td>{employee.education}</td>
                        <td>{employee.wage}</td>
                    </tr>
                ))}
            </>
        );
    };

    const filteredOnyuzEmployees = DATA_EMPLOYEES.filter(
        employee => employee.department === "Önyüz" && employee.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!showOnlyRegular || employee.regular)
    );

    const filteredArkayuzEmployees = DATA_EMPLOYEES.filter(
        employee => employee.department === "Arkayüz" && employee.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!showOnlyRegular || employee.regular)
    );

    return (
        <>
            <section>
                <h2>Filterable Employees Table</h2>
                <form>
                    <input
                        type="text"
                        name="searchTerm"
                        id="searchTerm"
                        placeholder="Çalışan isminde arayın..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <label htmlFor="">
                        <input
                            type="checkbox"
                            checked={showOnlyRegular}
                            onChange={() => setShowOnlyRegular(!showOnlyRegular)}
                        />
                        Sadece kadrolu göster
                    </label>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>İsim</th>
                            <th>Bölüm</th>
                            <th>Kadro</th>
                            <th>Eğitim</th>
                            <th>Maaş</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderEmployees(filteredOnyuzEmployees, "Ön Yüz Geliştiriciler")}
                        {renderEmployees(filteredArkayuzEmployees, "Arkayüz Geliştiriciler")}
                    </tbody>
                </table>
            </section>
        </>
    );
}
