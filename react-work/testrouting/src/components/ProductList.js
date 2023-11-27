import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = () => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                let apiResponse = response.data;
                setProductList(apiResponse.products);
            }).catch(err => {
                console.log(err);
            });
    }
    return <>
        <Header />
        <hr />
        {productList.length == 0 ? <div className="loader text-center">
            <div class="spinner-border text-muted"></div>
            <div class="spinner-border text-primary"></div>
            <div class="spinner-border text-success"></div>
            <div class="spinner-border text-info"></div>
            <div class="spinner-border text-warning"></div>
            <div class="spinner-border text-danger"></div>
            <div class="spinner-border text-secondary"></div>
            <div class="spinner-border text-dark"></div>
            <div class="spinner-border text-light"></div>

        </div> : ""}

        <table className="table mt-3">
            <thead>
                <tr>
                    <td>S.no</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {productList.map((product, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}




