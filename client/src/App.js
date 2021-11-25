import WarehouseInventory from "./pages/WarehouseInventory/WarehouseInventory";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import Warehouse from './pages/Warehouse/Warehouse';
import Footer from "./components/Footer/Footer";
import NewInv from "./components/NewInv/NewInv";
import NewWarehousePage from "./pages/NewWarehousePage/NewWarehousePage";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

document.title = "InStock";

const App = () => {
  return (
    <>
      <main className="main-content">
        <Header />
        <Switch>
          {/* <Route
            exact path="/robdesignpage"
            component={WarehouseDelModal}/> */}

          {/* warehouse list component */}
          <Route 
            exact path="/" 
            component={Warehouse} />
          <Redirect from='/warehouses' to='/' exact/>            
          {/* warehouse add component */}
          {/* <Route path="/warehouses/add" component={} /> */}

          {/* warehouse add component */}
          <Route 
            path="/warehouses/add" exact
            component={NewWarehousePage} 
          />
          {/* warehouse edit component */}
          <Route path="/warehouses/:warehouseId/edit" component={EditWarehouse} />
          
          {/* warehouse details component */}
          <Route
            path="/warehouses/:warehouseId"
            component={WarehouseInventory}
          />

          <Route
            path="/warehouses/:warehouseId"
            component={WarehouseInventory}
          />
          


          

            {/* inventory component */}
          <Route path="/inventory" exact component={InventoryList} />
          
          {/* Rob  "moved this upwards becuase would cause routing error" */}
          <Route 
            exact path="/inventory/add" 
            component={NewInv} 
          />

          {/* inventory details component  */}
          <Route path="/inventory/:itemId" component={InventoryDetails} />

          {/* inventory edit item component */}
          {/* <Route path="/inventory/:itemId/edit" component={} /> */}

          {/* inventory add item component  */}

        </Switch>
        <Footer />
      </main>
    </>
  );
};
// }

export default App;
