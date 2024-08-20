 

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
    T6_series,
    frontImgs,
    headerImgs,
    categoryImages,
    CE_Low_NOx_ContentImgs,
    E3B_contentImgs,
    K3B_contentImgs,
    K3SB_contentImgs,
    M7_contentImgs,
    E3_contentImgs,
    K3_contentImgs,
    K3S_contentImgs,
    KM5_contentImgs,
    Z2_contentImgs
} from '../assets/Gas water heaters';


export const productCategories = [
    {
        id: "Natural Flue",
        subCategories: [
            {
                id: "Classic",
                name: "Classic",
                image: CE_Low_NOx.Q6S_Front,
                productImages: [
                    {
                        id: 1,
                        img: T1_series.T1_front,
                        desc: "T1 Series Natural Flue Gas Water Heater",
                        description: "The T1 Series Natural Flue Gas Water Heater offers reliable performance and efficiency, perfect for residential use.",
                        specifications: {
                            feature1: "Energy Efficiency Rating",
                            feature2: "Water Capacity",
                            feature3: "Warranty",
                        },
                        sizes: ["L", "XL"],
                        colors: ["White", "Silver"],
                        otherImgs: T1_series
                    }
                ],
                featureContent: CE_Low_NOx_ContentImgs
            },
            {
                id: "Low Pressure",
                name: "Low Pressure",
                image: T6_series.T6_front,
                productImages: [
                    {
                        id: 1,
                        img: T6_series.T6_front,
                        desc: "T6 Series Natural Flue Gas Water Heater",
                        description: "The T6 Series is designed for low-pressure systems, providing consistent hot water even with low water pressure.",
                        specifications: {
                            feature1: "Low Pressure Compatibility",
                            feature2: "Durability",
                            feature3: "Energy Efficiency",
                        },
                        sizes: ["M", "L"],
                        colors: ["Black", "White"],
                        otherImgs: T6_series
                    }
                ]
            }
        ]
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
                        id: 1,
                        img: M7_series.M7_front,
                        desc: "M7 Series Mechanical Force Flue Gas Water Heater",
                        description: "The M7 Series Mechanical Force Flue Gas Water Heater is known for its robust build and mechanical simplicity.",
                        specifications: {
                            feature1: "Manual Control",
                            feature2: "High Durability",
                            feature3: "Maintenance Friendly",
                        },
                        sizes: ["M", "L"],
                        colors: ["Gray", "White"],
                        otherImgs: M7_series
                    }
                ],
                featureContent: M7_contentImgs
            },
            {
                id: "Digital",
                name: "Digital",
                image: K3S_series_Silver.K3S_front_Silver,
                productImages: [
                    {
                        id: 1,
                        img: K3S_series_Silver.K3S_front_Silver,
                        desc: "K3S Series Inverter Digital Force Flue Gas Water Heater",
                        description: "The K3S Series is equipped with advanced inverter technology for precise temperature control.",
                        specifications: {
                            feature1: "Inverter Technology",
                            feature2: "Digital Display",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["L", "XL"],
                        colors: ["Silver", "Black"],
                        otherImgs: K3S_series_Silver
                    },
                    {
                        id: 2,
                        img: KM5_series.KM5_front,
                        desc: "KM5 Series Easy Service Force Flue Gas Water Heater",
                        description: "The KM5 Series is designed for easy maintenance and service, offering reliable hot water with minimal effort.",
                        specifications: {
                            feature1: "Easy Service Access",
                            feature2: "Energy Efficiency",
                            feature3: "Durability",
                        },
                        sizes: ["M", "L"],
                        colors: ["White", "Gray"],
                        otherImgs: KM5_series
                    },
                    {
                        id: 3,
                        img: K3_series.K3_front,
                        desc: "K3 Series Digital Force Flue Gas Water Heater",
                        description: "The K3 Series offers digital controls and superior efficiency for modern homes.",
                        specifications: {
                            feature1: "Digital Controls",
                            feature2: "High Efficiency",
                            feature3: "Compact Design",
                        },
                        sizes: ["M", "L", "XL"],
                        colors: ["Black", "White"],
                        otherImgs: K3_series
                    },
                    {
                        id: 4,
                        img: E3_series.E3_front,
                        desc: "E3 Series Big Capacity Force Flue Gas Water Heater",
                        description: "The E3 Series is designed for larger households, providing ample hot water for multiple outlets.",
                        specifications: {
                            feature1: "Large Capacity",
                            feature2: "Digital Display",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["XL"],
                        colors: ["White"],
                        otherImgs: E3_series
                    }
                ],
                featureContent: E3_contentImgs
            },
            {
                id: "Zero Cold",
                name: "Zero Cold",
                image: Z2_series.Z2_front,
                productImages: [
                    {
                        id: 1,
                        img: Z2_series.Z2_front,
                        desc: "Z2 Series Zero Cold Force Flue Gas Water Heater",
                        description: "The Z2 Series ensures zero cold water at the start, offering instant hot water on demand.",
                        specifications: {
                            feature1: "Zero Cold Start",
                            feature2: "Energy Efficient",
                            feature3: "Durable Build",
                        },
                        sizes: ["L", "XL"],
                        colors: ["White", "Silver"],
                        otherImgs: Z2_series
                    }
                ],
                featureContent: Z2_contentImgs
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
                    {
                        id: 1,
                        img: K3SB_series.K3SB_front,
                        desc: "K3SB Series Digital Balance Flue Gas Water Heater",
                        description: "The K3SB Series offers a balanced flue design with digital controls for optimized performance.",
                        specifications: {
                            feature1: "Balanced Flue Design",
                            feature2: "Digital Interface",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["M", "L"],
                        colors: ["Silver", "White"],
                        otherImgs: K3SB_series
                    }
                ],
                featureContent: K3SB_contentImgs
            },
            {
                id: "CE Low NOx",
                name: "CE Low NOx",
                image: CE_Low_NOx.Q6S_Front,
                productImages: [
                    {
                        id: 1,
                        img: CE_Low_NOx.Q6S_Front,
                        desc: "CE Low NOx Series Balance Flue Gas Water Heater",
                        description: "The CE Low NOx Series is environmentally friendly, offering low NOx emissions with balanced flue technology.",
                        specifications: {
                            feature1: "Low NOx Emissions",
                            feature2: "Energy Efficient",
                            feature3: "Eco-Friendly",
                        },
                        sizes: ["L", "XL"],
                        colors: ["White", "Gray"],
                        otherImgs: CE_Low_NOx
                    }
                ],
                featureContent: CE_Low_NOx_ContentImgs
            }
        ]
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
                        id: 1,
                        img: E5_series.E5_front,
                        desc: "E5 Series External Gas Water Heater",
                        description: "The E5 Series is designed for external installation, offering robust performance and weather resistance.",
                        specifications: {
                            feature1: "Weather Resistant",
                            feature2: "High Efficiency",
                            feature3: "Durable Exterior",
                        },
                        sizes: ["M", "L"],
                        colors: ["White", "Silver"],
                        otherImgs: E5_series
                    }
                ]
            }
        ]
    }
];




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

