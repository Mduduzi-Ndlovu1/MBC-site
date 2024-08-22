 

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
    {
        name: "Contact Us",
        path: "/contact",
    }
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
    E5_contentImgs,
    K3_contentImgs,
    K3S_contentImgs,
    KM5_contentImgs,
    Z2_contentImgs,
    theLogo,
    thelogoBack,
    themission,
    thevission
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
                        otherImgs: T1_series,
                        featureContent: CE_Low_NOx_ContentImgs,
                        productParameters: {
                            models: ["JSD12-6T1","JSD20-10T1","JSD24-12T1" ],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["6L/min", "10L/min", "12L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["12", "20", "24"] },
                                { label: "Efficiency", values: [">84%", ">84%", ">84%"] },
                                { label: "N.W (kg)", values: ["5.2", "8.5", "9.6"] },
                                { label: "G.W (kg)", values: ["6", "9.8", "11.8"] },
                                { label: "Product Dimensions (mm)", values: ["445*305*127", "550*330*198", "610*350*188"] },
                                { label: "Packaging Dimensions (mm)", values: ["570*362*202", "688*393*247", "734*413*248"] },
                                
                            ]
                        }

                    }
                ],
                

                
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
                        otherImgs: T6_series,
                        productParameters:{
                            models: ["JSD12-6T6", "JSD20-10T6", "JSD24-12T6"],
                            parameters: [
                            { label: "Gas Type", values: ["NG/LPG", "NG/LPG", "NG/LPG"] },
                            { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["6L/min", "10L/min", "12L/min"] },
                            { label: "Nominal Power/Rated Heat Input(kW)", values: ["12", "20", "24"] },
                            { label: "Efficiency", values: [">84%", ">84%", ">84%"] },
                            { label: "N.W (kg)", values: ["5.7", "8.5", "9.6"] },
                            { label: "G.W (kg)", values: ["6.5", "9.8", "11.8"] },
                            { label: "Product Dimensions (mm)", values: ["445*305*127", "550*330*198", "610*350*188"] },
                            { label: "Packaging Dimensions (mm)", values: ["570*362*202", "688*393*247", "734*413*248"] },
                            
                      ],
        
                        }
                        
                    }
                ],
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
                        description: "Spcial design of slim size and simple oeration, with economic energy consuming, particually for one bathroom use.",
                        specifications: {
                            feature1: "Manual Control",
                            feature2: "High Durability",
                            feature3: "Maintenance Friendly",
                        },
                        sizes: ["10L", "8L"],
                        colors: ["White"],
                        otherImgs: M7_series,
                        featureContent: M7_contentImgs,
                        productParameters: {
                            models: ["JSQ12–6M7", "JSQ16-8M7"],
                            parameters: [
                              { label: "Gas Type", values: ["NG/LPG", "NG/LPG"] },
                              { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["6L/min", "8L/min"] },
                              { label: "Nominal Power/Rated Heat Input(kW)", values: ["12", "16"] },
                              { label: "Flue Pipe / Chimney Diameter(mm)", values: ["Φ60", "Φ60"] },
                              { label: "Efficiency", values: [">86%", ">86%"] },
                              { label: "N.W (kg)", values: ["7.5","9.5"] },
                              { label: "G.W (kg)", values: ["9", "8"] },
                              { label: "Product Dimensions (mm)", values: ["500*320*122", "500*320*122",] },
                              { label: "Packaging Dimensions (mm)", values: ["640*386*260", "640*386*122"] },
                              
                            ],
                          },
                    }
                ],
                
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
                        description: "K3S force flue type, which adopts smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, birng the best hot water experience.",
                        specifications: {
                            feature1: "Inverter Technology",
                            feature2: "Digital Display",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["20L", "16L", "12L"],
                        colors: ["Silver", "Black"],
                        otherImgs: K3S_series_Silver,
                        featureContent: K3S_contentImgs,
                        productParameters: {
                            models: ["JSQ24-12K3S", "JSQ30-16K3S","JSQ36-20K3S"],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["24L/min", "28L/min", "30L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["48", "56", "60"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G3/4", "G3/4", "G3/4"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Efficiency", values: [">80%", ">80%", ">80%"] },
                                { label: "N.W (kg)", values: ["18", "18", "18"] },
                                { label: "G.W (kg)", values: ["20.5", "20.5", "20.5"] },
                                { label: "Product Dimensions (mm)", values: ["630*435*165", "630*435*165", "630*435*165"] },
                                { label: "Packaging Dimensions (mm)", values: ["785*485*280", "785*485*280", "785*485*280"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["298/610/680", "298/610/680", "298/610/680"] },
                              ,
                              
                            ],
                          },

                    },
                    {
                        id: 2,
                        img: KM5_series.KM5_front,
                        desc: "KM5 Series Easy Service Force Flue Gas Water Heater",
                        description: "KM5 force flue type, which adopts easy disassembly back cover, offer more convenient parts replacement in after sales service, meanwhile adopting smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, bring the best hot water experience.",
                        specifications: {
                            feature1: "Easy Service Access",
                            feature2: "Energy Efficiency",
                            feature3: "Durability",
                        },
                        sizes: ["16L", "12L"],
                        colors: ["White"],
                        otherImgs: KM5_series,
                        featureContent: KM5_contentImgs,
                        productParameters: {
                            models: ["JSQ26-13KM5", "JSQ30-16KM5","JSQ30-20KM5"],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["13L/min", "16L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["26", "30"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G1/2", "G1/2"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2"] },
                                { label: "Flue Pipe / Chimney Diameter(mm)", values: ["Φ60", "Φ60"] },
                                { label: "Efficiency", values: [">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["10", "13"] },
                                { label: "G.W (kg)", values: ["10.5", "13.5"] },
                                { label: "Product Dimensions (mm)", values: ["525*340*155", "525*340*155"] },
                                { label: "Packaging Dimensions (mm)", values: ["718*490*251", "718*490*251"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["320/668/802", "320/668/802"] },
                              ,
                              
                            ],
                          },
                        
                    },
                    {
                        id: 3,
                        img: K3_series.K3_front,
                        desc: "K3 Series Digital Force Flue Gas Water Heater",
                        description: "K3 force flue type, adopting the newest smart digital control system, realize smart self-adapation to stablize temperature, bringing a better hot water experience.",
                        specifications: {
                            feature1: "Digital Controls",
                            feature2: "High Efficiency",
                            feature3: "Compact Design",
                        },
                        sizes: ["16L", "12L", "10L"],
                        colors: ["White"],
                        otherImgs: K3_series,
                        featureContent: K3_contentImgs,
                        productParameters: {
                            models: ["JSQ20-10K3", "JSQ12-10K3","JSQ30-16K3"],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["10L/min", "12L/min","16L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["20", "24", "30"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2", "G1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Flue Pipe / Chimney Diameter(mm)", values: ["Φ60", "Φ60", "Φ60"] },
                                { label: "Efficiency", values: [">88%", ">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["9.1", "9.6", "10.1"] },
                                { label: "G.W (kg)", values: ["10.5", "11", "11.5"] },
                                { label: "Product Dimensions (mm)", values: ["525*340*155", "525*340*155", "525*340*155"] },
                                { label: "Packaging Dimensions (mm)", values: ["722*405*275", "722*405*275", "722*405*275"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["394/810/900", "394/810/900", "394/810/900"] },
                              ,
                              
                            ],
                          },

                    },
                    {
                        id: 4,
                        img: E3_series.E3_front,
                        desc: "E3 Series Big Capacity Force Flue Gas Water Heater",
                        description: "E3 force flue type, which adopts smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, birng the best hot water experience.",
                        specifications: {
                            feature1: "Large Capacity",
                            feature2: "Digital Display",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["30L","28L","26L", "24L"],
                        colors: ["White"],
                        otherImgs: E3_series,
                        featureContent: E3_contentImgs,
                        productParameters: {
                            models: ["JSQ48-24E3", "JSQ56-28E3","JSQ60-30E3"],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["24L/min", "28L/min","30L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["48", "56", "60"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2", "G1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "G1/2"] },
                                { label: "Efficiency", values: [">88%", ">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["18", "18", "18"] },
                                { label: "G.W (kg)", values: ["20.5", "20.5", "20.5"] },
                                { label: "Product Dimensions (mm)", values: ["630*435*165", "630*435*165", "630*435*165"] },
                                { label: "Packaging Dimensions (mm)", values: ["785*485*280", "785*485*280", "785*485*280"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["296/610/680", "296/610/680", "296/610/680"] },
                              ,
                              
                            ],
                          },
                    }
                ],
                
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
                        otherImgs: Z2_series,
                        featureContent: Z2_contentImgs,
                        productParameters: {
                            models: ["JSQ26-13Z2", "JSQ30-16Z2",],
                            parameters: [
                              { label: "Gas Type", values: ["NG/LPG", "NG/LPG",] },
                              { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["13L/min", "16L/min"] },
                              { label: "Nominal Power/Rated Heat Input(kW)", values: ["26", "30"] },
                              { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min"] },
                              { label: "Gas Inlet", values: ["G1/2", "G1/2"] },
                              { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                              { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "G1/2"] },
                              { label: "Flue Pipe / Chimney Diameter(mm)", values: ["Φ60", "Φ60"] },
                              { label: "Efficiency", values: [">88%", ">88%"] },
                              { label: "N.W (kg)", values: ["11.5", "12"] },
                              { label: "G.W (kg)", values: ["13", "14"] },
                              { label: "Product Dimensions (mm)", values: ["525*340*155", "525*340*155"] },
                              { label: "Packaging Dimensions (mm)", values: ["708*515*240", "708*515*240"] },
                              { label: "Loading Qty(20GP/40GP/40HQ)", values: ["355/730/810", "355/730/810"] },
                            ],
                          },

                    }
                ],
                

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
                        description: "K3SB balance flue type is available to be installed inside the room, which adopts smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, bring the best hot water experience.",
                        specifications: {
                            feature1: "Balanced Flue Design",
                            feature2: "Digital Interface",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["20L", "16L", "12L"],
                        colors: ["White"],
                        otherImgs: K3SB_series,
                        featureContent: K3SB_contentImgs,
                        productParameters: {
                            models: ["JSQ24–12K3SB", "JSQ30–16K3SB", "JSQ36–20K3SB"],
                            parameters: [
                                { label: "Gas Type", values: ["NG", "NG/LPG", "LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["12L/min", "16L/min", "20L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["24", "30", "36"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Flue Pipe / Chimney Diameter(mm)", values: ["Φ60/Φ100", "Φ60/Φ100", "Φ60/Φ100"] },
                                { label: "Efficiency", values: [">88%", ">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["9.3kg", "9.9kg", "10.5kg"] },
                                { label: "G.W (kg)", values: ["11.5kg", "12.1kg", "12.7kg"] },
                                { label: "Product Dimensions (mm)", values: ["525*340*170", "525*340*170", "525*340*170"] },
                                { label: "Packaging Dimensions (mm)", values: ["718*413*271", "718*413*271", "718*413*271"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["397/819/931", "397/819/931", "397/819/931"] },
                            ]
                            
                        }
                        
                    },
                    {
                        id: 2,
                        img: K3B_series.K3B_front,
                        desc: "K3B Series Digital Balance Flue Gas Water Heater",
                        description: "K3B balance flue type is available to be installed inside the room, which adopts smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, bring the best hot water experience.",
                        specifications: {
                            feature1: "Balanced Flue Design",
                            feature2: "Digital Interface",
                            feature3: "Energy Efficient",
                        },
                        sizes: ["16L", "12L", "10L"],
                        colors: ["White"],
                        otherImgs: K3SB_series,
                        featureContent: K3B_contentImgs,
                        productParameters: {
                            models: ["JSQ24–10K3B", "JSQ24–12K3B", "JSQ30–16K3B"],
                            parameters: [
                                { label: "Gas Type", values: ["NG/LPG", "NG/LPG", "NG/LPG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["10L/min", "12L/min", "16L/min"] },
                                { label: "Nominal Power/Rated Heat Input(kW)", values: ["20", "24", "30"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "NPT1/2"] },
                                { label: "Efficiency", values: [">88%", ">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["9.1kg", "9.6kg", "10.1kg"] },
                                { label: "G.W (kg)", values: ["10.2kg", "11kg", "11.5kg"] },
                                { label: "Product Dimensions (mm)", values: ["525*340*155", "525*340*155", "525*340*155"] },
                                { label: "Packaging Dimensions (mm)", values: ["722*405*275", "722*405*275", "722*405*275"] },
                                { label: "Loading Qty(20GP/40GP/40HQ)", values: ["394/810/900", "394/810/900", "394/810/900"] },
                            ]   
                        }
                    },

                ],
            },
            {
                id: "CE Low NOx",
                name: "CE Low NOx",
                image: CE_Low_NOx.Q6S_Front,
                productImages: [
                    {
                        id: 1,
                        img: CE_Low_NOx.Q6S_Front,
                        desc: "Q6S Series Balance Flue Gas Water Heater",
                        description: "Q6S balance flue type is available to be installed inside the room, which adopts smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, bring the best hot water experience..",
                        specifications: {
                            feature1: "Low NOx Emissions",
                            feature2: "Energy Efficient",
                            feature3: "Eco-Friendly",
                        },
                        sizes: ["16L", "14L", "12L"],
                        colors: ["White"],
                        otherImgs: CE_Low_NOx,
                        featureContent: CE_Low_NOx_ContentImgs,

                    }
                ],
                featureContent: CE_Low_NOx_ContentImgs,
                productParameters: {
                    models: ["JSG24-12Q6S", "JSG28-14Q6S", "JSG30-16Q6S"],
                    parameters: [
                        { label: "Gas Type", values: ["NG/LPG", "NG/LPG", "NG/LPG"] },
                        { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["12L/min", "14L/min", "16L/min"] },
                        { label: "Nominal Power / Rated Heat Input(kW)", values: ["24", "28", "30"] },
                        { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min"] },
                        { label: "Gas Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                        { label: "Cold Water Inlet", values: ["G1/2", "G1/2", "G1/2"] },
                        { label: "Hot Water Outlet", values: ["G1/2", "G1/2", "G1/2"] },
                        { label: "Efficiency", values: [">88%", ">88%", ">88%"] },
                        { label: "N.W (kg)", values: ["13.2", "13.2", "13.2"] },
                        { label: "G.W (kg)", values: ["17", "17", "17"] },
                        { label: "Product Dimensions (mm)", values: ["533*330*230", "533*330*230", "533*330*230"] },
                        { label: "Packaging Dimensions (mm)", values: ["717*477*330", "717*477*330", "717*477*330"] },
                        { label: "Loading Qty(20GP/40GP/40HQ)", values: ["281/554/642", "281/554/642", "281/554/642"] },
                    ]   
                }
                
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
                        description: "E5 series external gas water heater, with IPX4 water proof and inverter motor fan, having strong bearing to outdoor environment, adopting smart digital control system with advanced inverter technology, realize smart self-adapation to stablize temperature, bring the best hot water experience.",
                        specifications: {
                            feature1: "Weather Resistant",
                            feature2: "High Efficiency",
                            feature3: "Durable Exterior",
                        },
                        sizes: ["20L", "18L", "16L"],
                        colors: ["White"],
                        otherImgs: E5_series,
                        featureContent: E5_contentImgs,
                        productParameters: {
                            models: ["JSW32-16E5", "JSW36-18E5", "JSW40-20E5", "JSW60-30E5"],
                            parameters: [
                                { label: "Gas Type", values: ["LPG", "LPG/NG", "LPG", "LNG"] },
                                { label: "Rated Hot Water Capacity (ΔT=25K)", values: ["16L/min", "18L/min", "20L/min", "30L/min"] },
                                { label: "Nominal Power / Rated Heat Input(kW)", values: ["32", "36", "38", "60"] },
                                { label: "Activated Water Flow Rate", values: ["2.5L/min", "2.5L/min", "2.5L/min", "2.5L/min"] },
                                { label: "Gas Inlet", values: ["NPT1/2", "NPT1/2", "NPT1/2", "G3/4"] },
                                { label: "Cold Water Inlet", values: ["NPT1/2", "NPT1/2", "NPT1/2", "G3/4"] },
                                { label: "Hot Water Outlet", values: ["NPT1/2", "NPT1/2", "NPT1/2", "G3/4"] },
                                { label: "Efficiency", values: [">88%", ">88%", ">88%", ">88%"] },
                                { label: "N.W (kg)", values: ["13", "13.5", "13.5", "20"] },
                                { label: "G.W (kg)", values: ["16", "16.5", "16.5", "22"] },
                                { label: "Product Dimensions (mm)", values: ["588*385*190", "588*385*190", "588*385*190", "639*434*185"] },
                                { label: "Packaging Dimensions (mm)", values: ["723*431*291", "723*431*291", "723*431*291", "785*482*286"] },
                                { label: "Loading Qty (20GP/40GP/40HQ)", values: ["343/700/786", "343/700/786", "343/700/786", "276/570/667"] },
                            ]   
                        }
                        
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
    categoryImages,
    theLogo,
    thelogoBack,
    themission,
    thevission

}
export { frontImgs, headerImgs, categoryImages };

