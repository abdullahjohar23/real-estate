import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import ManageProductsTable from "./ManageProductsTable";

function ManageProduct() {
    
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                
                <div className="text-center my-10">
                    <p className="text-indigo-600 font-bold">Manage Product</p>
                    <h2 className="text-2xl font-bold">You can update or delete any vehicle here</h2>
                </div>
              
                <ManageProductsTable></ManageProductsTable>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ManageProduct;