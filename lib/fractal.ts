import Auth from "./auth";
import Bank from "./banking";
import Forecasts from "./forecast";
import Categories from "./categories";
import Company from "./company";

export interface Fractalise extends Object {
    banks(): Bank;
    auth(): Auth;
    company(): Company;
    categories(): Categories;
    forecast(): Forecasts;
}
