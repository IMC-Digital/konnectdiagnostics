import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../api/index";
import axios from "axios";
import { TestCard } from "../requiredPages/TestCard";

export default function TestsGrid({ item, cart, setCart }) {
  const [tests, setTests] = useState([]);

    useEffect(() => {
        const getTests = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/tests/category/${item.category_id}`);
                console.log(response.data);
                // Append category property to each object in response.data
                const searchResultsWithCategory = response.data.map(result => ({
                    ...result,
                    category: item.category_name
                }));

                setTests(searchResultsWithCategory);
            } catch (error) {
                console.log(error);
            }
        };
        getTests();
    }, [setTests, item]);

    return (
        <div className="pt-2">
            <div>
                <h2 className="text-k-accent bg-light rounded-2 px-4 py-2 border mb-0 d-inline">
                    {tests.length} Tests found for {item.category_name}.
                </h2>
            </div>
            <div className="d-flex flex-wrap mt-3 gap-2">
                {tests.map((item, index) => (
                    <TestCard key={index} item={item} cart={cart} setCart={setCart} />
                ))}
            </div>
        </div>
    );
}
