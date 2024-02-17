import Table from 'react-bootstrap/Table';

function TestsTable({ testsData }) {
    return (
        <Table striped>
            <thead className='table-light'>
                <tr>
                    <th>#Id</th>
                    <th>Test name</th>
                    <th>Price</th>
                    <th>Sample type</th>
                    <th>Fasting</th>
                    <th>TAT</th>
                    <th>Pre-test preparation</th>
                    <th>Frequency</th>
                    <th>Prescription</th>
                    <th>Home sample collection</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                    {
                        testsData.map((item, index) => (
                            <tr key={index} className='w-100'>
                                <td> {item.test_id} </td>
                                <td> {item.test_name} </td>
                                <td> {item.price} </td>
                                <td> {item.sample_type} </td>
                                <td> {item.fasting} </td>
                                <td> {item.tat} </td>
                                <td> {item.pre_test_preparation} </td>
                                <td> {item.frequency} </td>
                                <td> {item.required_prescription} </td>
                                <td> {item.home_sample_collection === 1 ? "Available" : "Not Available"} </td>
                            </tr>
                        ))
                    }
            </tbody>
        </Table>
    );
}

export default TestsTable;