import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_API_URL } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import { removeFromCart } from '../../utils/cartUtils';


const SelectMember2 = ({ userId, cart, profileData, setCart, checkOutFormData, setCheckOutFormData, setShowAddNewMemberPopup }) => {
    const [memSelData, setMemSelData] = useState(Array(cart.length).fill([profileData.fullname]));
    const [userMembers, setUserMembers] = useState([]);

    useEffect(() => {
        const fetchUserMember = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/user/get-members`, { params: { userid: userId } });
                setUserMembers(response.data.response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserMember();
    }, [userId, cart]);

    useEffect(() => {
        if (checkOutFormData.selectedMember.length === 0) {
            return
        } else {
            setMemSelData(checkOutFormData.selectedMember)
        }
    }, [checkOutFormData, setMemSelData])

    const handleCheckboxChange = async (questionIndex, option) => {
        const updatedFormData = [...memSelData];
        updatedFormData[questionIndex] = updatedFormData[questionIndex].includes(option)
            ? updatedFormData[questionIndex].filter((selectedOption) => selectedOption !== option)
            : [...updatedFormData[questionIndex], option];
    
        setMemSelData(updatedFormData);
    };

    const handleMemberSelectionSubmit = () => {
        if (memSelData.every((options) => options.length > 0)) {
            const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems"));
            const updatedCartItems = prevCartItems.map((item, index) => {
                const selectedMembersCount = memSelData[index].length;
                return {
                    ...item,
                    quantity: selectedMembersCount,
                };
            });
            
            const newCartItems = [...updatedCartItems];
            localStorage.setItem('selectedCartItems', JSON.stringify(newCartItems));
            setCart(JSON.parse(localStorage.getItem("selectedCartItems")));

            setCheckOutFormData((prevData) => ({
                ...prevData,
                selectedMember: memSelData
            }));

            toast.success(`Cart prizes updated as per member selection for each test`, {position: toast.POSITION.BOTTOM_CENTER});
        } else {
            alert('Please select at least one member for each selected test.');
        }
    };

    // const handleRemoveFromCart = (item) => {
    //     const prevCartItems = JSON.parse(localStorage.getItem("selectedCartItems")) || [];
    //     const indexToRemove = prevCartItems.findIndex(cartItem => cartItem.product_id === item.product_id);
    //     const updatedCartItems = [...prevCartItems.slice(0, indexToRemove), ...prevCartItems.slice(indexToRemove + 1)];
    //     localStorage.setItem("selectedCartItems", JSON.stringify(updatedCartItems));
    //     setCart(updatedCartItems);
    // };

    const handleRemoveFromCart = (itemToRemove) => {
        const updatedCartItems = removeFromCart(
          itemToRemove,
          "selectedCartItems",
          `${itemToRemove.type === "test" ? itemToRemove.test_name : itemToRemove.package_name} removed from cart`
        );
        setCart(updatedCartItems);
        toast.error(`${itemToRemove.type === "test" ? itemToRemove.test_name : itemToRemove.package_name} removed from cart`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "red-toast",
        });
      };

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-between">
                <h2 className="text-k-secondary mb-0">Select Member for Selected Test</h2>
                <button
                    className="btn btn-outline-secondary btn-sm"
                    style={{ width: "200px" }}
                    onClick={() => setShowAddNewMemberPopup(true)}
                >
                    Add New Member +
                </button>
            </div>
            <hr />
            <form>
                {cart.map((product, questionIndex) => (
                    <div key={product.product_id} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center bg-light p-2 ps-3 rounded">
                            <div className='d-flex'>
                                <h2 className='text-k-accent mb-0 me-2'>{product.type === "test" ? product.test_name : product.package_name}</h2>
                                <span className="small text-muted text-capitalize"> - {product.type} </span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <p className="text-k-text mb-0 me-2"> &#8377; {product.price} </p>
                                <button className='btn border btn-sm cursor-pointer' onClick={() => { handleRemoveFromCart(product) }}>
                                    <i className="fa-regular fa-trash-can text-danger"></i>
                                </button>
                            </div>
                        </div>

                        <div className='d-flex '>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`option${profileData.profile_id}${questionIndex}`}
                                    checked={memSelData[questionIndex].includes(profileData.fullname)}
                                    onChange={() => handleCheckboxChange(questionIndex, profileData.fullname)}
                                    required
                                />
                                <label className="form-check-label" htmlFor={`option${profileData.profile_id}${questionIndex}`}>

                                    <div className="d-flex p-3 rounded" style={{ width: "200px", marginLeft: "-25px", zIndex: "0" }}>
                                        <div className='mb-2'>
                                            <img src={`./images/icons/${profileData.gender}.svg`} alt="male" className="me-3" style={{ width: "35px" }} />
                                        </div>
                                        <div>
                                            <h2 className="text-k-text mb-0">{profileData.fullname}</h2>
                                            <p className="small text-muted fw-bold mb-0">Self</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            {userMembers.map((member, optionIndex) => (
                                <div key={member.member_id} className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`option${member.member_id}${questionIndex}`}
                                        checked={memSelData[questionIndex].includes(member.fullname)}
                                        onChange={() => handleCheckboxChange(questionIndex, member.fullname)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor={`option${member.member_id}${questionIndex}`}>
                                        <div className="d-flex p-3 rounded" style={{ width: "200px", marginLeft: "-25px", zIndex: "0" }}>
                                            <div className='mb-2'>
                                                <img src={`./images/icons/${member.gender}.svg`} alt="male" className="me-3" style={{ width: "35px" }} />
                                            </div>
                                            <div>
                                                <h2 className="text-k-text mb-0">{member.fullname}</h2>
                                                <p className="small text-muted fw-bold mb-0">{member.relation}</p>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="button" className="btn btn-primary w-100" onClick={handleMemberSelectionSubmit}>
                    Confirm Member selection for selected tests
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default SelectMember2;