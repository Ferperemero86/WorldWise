import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "@/pages/Product";
import HomePage from "@/pages/Homepage";
import Pricing from "@/pages/Pricing";
import AppLayout from "@/pages/AppLayout";
import Login from "@/pages/Login";
import PageNotFound from "@/pages/PageNotFound";

import Form from "@/components/Form/Form";
import CityList from "@/components/CityList/CityList";
import CountryList from "@/components/CountryList/CountryList";
import City from "./components/City/City";

import { CitiesProvider } from "@/contexts/CitiesContext";
import { AuthProvider } from "@/contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<p>List of cities</p>} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}
