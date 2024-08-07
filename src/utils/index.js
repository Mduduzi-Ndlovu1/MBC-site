 

export const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Products",
        path: "/products",
    },
];

import { 
    CE_Low_NOx, 
    E3B_series, 
    K3B_series, 
    K3SB_series, 
    E5_series, 
    E3_series, 
    K3_series, 
    K3S_series_Silver, 
    K3S_series_White, 
    KM5_series, 
    M7_series, 
    Z2_series, 
    T1_series, 
    T6_series ,
    frontImgs
} from '../assets/Gas water heaters';



export const categories = [
    {
        id:1,
        name: "Balance Flue",
        subCategories: [
            "CE Low NOx",
            "Digital",
        ]

    },
    {
        id:2,
        name: "Force Flue",
        subCategories:[
            "Mechanical",
            "Digital",
            "Zero Cold",
        ]
    },
    {
        id:3,
        name: "Natural Flue",
        subCategories:[
            "Classic",
            "Low Pressure",
        ]
    },
    {
        id:4,
        name: "External",
        subCategories:[
            "E5 Series"
        ]
    },
];

// Exporting gas water heater data
export const gasWaterHeaters = [
    CE_Low_NOx,
    E3B_series,
    K3B_series,
    K3SB_series,
    E5_series,
    E3_series,
    K3_series,
    K3S_series_Silver,
    K3S_series_White,
    KM5_series,
    M7_series,
    Z2_series,
    T1_series,
    T6_series
];



export default {
    navLinks,
    categories,
    gasWaterHeaters,
    frontImgs

}
