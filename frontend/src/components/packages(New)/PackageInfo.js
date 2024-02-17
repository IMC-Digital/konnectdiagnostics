import React, { useEffect, useState } from 'react';
import PackageInfoTestsTable from "./PackageInfoTestsTable";
import axios from 'axios';
import BASE_API_URL from '../../api/index';
import { ToastContainer, toast } from "react-toastify";

export default function PackageInfo({ cart, setCart, item }) {
    const [isItemSelected, setIsItemSelected] = useState(false);
    const [packageTests, setPackageTests] = useState([]);

    useEffect(() => {
        const getTests = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/tests/package/${item.package_id}`);
                setPackageTests(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getTests();
    }, [item, setPackageTests]);

    const handleAddToCart = (item) => {
        if (!isItemSelected) {
            item.quantity = 1;
            item.type = "package";
            item.price = sumPrices(packageTests);
            const prevCartItems =
                JSON.parse(localStorage.getItem("selectedCartItems")) || [];
            const newCartItems = [...prevCartItems, item];
            localStorage.setItem("selectedCartItems", JSON.stringify(newCartItems));
            setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

            toast.success(`${item.package_name} added to cart`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "green-toast",
            });
        }
    };

    const handleRemoveFromCart = (itemToRemove) => {
        const prevCartItems =
            JSON.parse(localStorage.getItem("selectedCartItems")) || [];
        console.log("prevCartItems:", prevCartItems);
        const indexToRemove = prevCartItems.findIndex(
            (item) => item.package_id === itemToRemove.package_id
        );
        const updatedCartItems = [
            ...prevCartItems.slice(0, indexToRemove),
            ...prevCartItems.slice(indexToRemove + 1),
        ];
        localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
        setCart(updatedCartItems);

        toast.error(`${item.package_name} removed from cart`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "red-toast",
        });
    };

    useEffect(() => {
        setIsItemSelected(cart.some((cartItem) => cartItem.package_id === item.package_id));
    }, [cart, item]);

    return (
        <div className="rounded-2 h-100 p-3 my-3 bg-white shadow-sm">
            <div className="d-flex-cb w-100 bg-k-light rounded-2 overflow-hidden">
                <div className="ps-4 h-100">
                    <h2 className="text-k-secondary"> {item.package_name} </h2>
                    <p className="small mb-1 text-k-clr-secondary">
                        Tests covered {packageTests && packageTests.length}{" "}
                    </p>
                    <h2 className="text-k-secondary mb-3 price mb-0 fw-bolder text-k-clr-secondary">
                        <small>&#8377; </small> {sumPrices(packageTests)}{" "}
                    </h2>

                    {isItemSelected ? (
                        <button 
                            className="atc-btn-rmv btn btn-success text-white px-4" 
                            onClick={() => handleRemoveFromCart(item)}>
                            Remove Item
                        </button>
                    ) : (
                        <button 
                            className="atc-btn btn btn-k-secondary text-white px-4" 
                            onClick={() => handleAddToCart(item)}>
                            Add to Cart
                        </button>
                    )}
                </div>
                <div>
                    <img 
                        src={`/images/health-packages/${item.package_category}.jpg`} 
                        alt="" 
                        style={{ width: "500px" }}
                    />
                </div>
            </div>
            <div>
                <p className="text-k-secondary mb-0 mt-4">Tests / Parameters</p>
                <p className="small text-k-clr-secondary">Laborator Tests</p>

                <PackageInfoTestsTable packageTests={packageTests} />
            </div>
            <hr />
            <div>
                <p className="text-k-secondary mb-0 mt-4">General Instructions</p>
                <p className="small text-k-clr-secondary">Tests, Pre-test preps info, tat, prescription</p>


            </div>

            <ToastContainer />
        </div>
    )
}

const sumPrices = (packageTests) => {
    if (!Array.isArray(packageTests)) {
        return 0;
    }
    return packageTests.reduce((total, item) => total + (item.price || 0), 0);
};
