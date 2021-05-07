import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Donutchart from "components/Donutchart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary pv-3">Dashboard de Vendas</h1>

                <div className='row px-3'>
                    <div className='col-sm-6' >
                        <h5 className='text-center text-secondary'>Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className='col-sm-6' >
                        <h5>Todas as vendas</h5>
                        <Donutchart></Donutchart>
                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='text-primary'>Todas vendas</h2>
                </div>

                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>

    );
}

export default Dashboard;
