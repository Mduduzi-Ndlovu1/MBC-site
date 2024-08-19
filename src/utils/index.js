 

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
    frontImgs,
    headerImgs,
    categoryImages,
    
} from '../assets/Gas water heaters';

export const productCategories = [
    {
        id: "Natural FLue",
        subCategories: [
            {
                id: "Classic",
                name: "Classic",
                image: CE_Low_NOx.Q6S_Front,
                productImages: [
                    {
                        id:1,
                        img:T1_series.T1_front,
                        desc: "T1 Series Natural Flue Gas Water Heater"
                    }
                ]

            },
            {
                id: "Low Pressure",
                name: "Low Pressure",
                image: T6_series.T6_front,
                productImages: [
                    {
                        id:1,
                        img:T6_series.T6_front,
                        desc: "T6 Series Natural Flue Gas Water Heater"}
                ]
            }
        ],        
    },
    {
        id: "Force Flue",
        subCategories: [
            {
                id: "Mechanical",
                name: "Mechanical",
                image: M7_series.M7_front,
                productImages: [
                    {
                        id:1,
                        img:M7_series.M7_front,
                        desc: "M7 Series Mechanical Force Flue Gas Water Heater"
                    }
                ]
            },
            {
                id: "Digital",
                name:"Digital",
                image: K3S_series_Silver.K3S_front_Silver,
                productImages: [
                    {
                        id:1,
                        img:K3S_series_Silver.K3S_front_Silver,
                        desc: "K3S Series Inverter Digital Force Flue Gas Water Heater"
                    },
                    {
                        id:2,
                        img:KM5_series.KM5_front,
                        desc: "KM5 Series Easy Service Force Flue Gas Water Heater"
                    },
                    {
                        id:3,
                        img:K3_series.K3_front,
                        desc: "K3 Series Digital Force Flue Gas Water Heater"
                    },
                    {
                        id:4,
                        img:E3_series.E3_front,
                        desc: "E3 Series Big Capacity Force Flue Gas Water Heater"
                    }
                ]
            },
            {
                id: "Zero Cold",
                name: "Zero Cold",
                image: Z2_series.Z2_front,
                productImages: [
                    {
                        id: 1,
                        img: Z2_series.Z2_front,
                        desc: "Z2 Series Zero Cold Force Flue Gas Water Heater"
                    }
                ]
            }
        ]
    },
    {
        id: "Balance Flue",
        subCategories: [
            {
                id: "Digital",
                name: "Digital",
                image: K3SB_series.K3SB_front,
                productImages: [
                    K3SB_series.K3SB_front
                ],
            },
            {
                id: "CE Low NOx",
                name: "CE Low NOx",
                image: CE_Low_NOx.Q6S_Front,
                productImages: [
                    CE_Low_NOx.Q6S_Front
                ]
            }
        ],
        
    },
    {
        id: "External",
        subCategories: [
            {
                id: "External",
                name: "External",
                image: E5_series.E5_front,
                productImages: [
                    {   
                        id:1,
                        img:E5_series.E5_front,
                        desc: "E5 Series External Gas Water Heater"

                    }
                ],
            },
        ],
        
    }
]

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
    frontImgs,
    headerImgs,
    categoryImages

}
export { frontImgs, headerImgs, categoryImages };

