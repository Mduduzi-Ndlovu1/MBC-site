 

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
              otherImgs: T1_series,
              size: "L",
              color: ["White", "Black"],
              features: [
                {
                  header: "Energy Efficiency",
                  img: "path/to/image1.jpg",
                  text: "High efficiency with low energy consumption."
                },
                {
                  header: "Durability",
                  img: "path/to/image2.jpg",
                  text: "Built to last with high-quality materials."
                }
              ]
            }
          ]
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
              otherImgs: T6_series,
              size: "M",
              color: ["Silver", "Gray"],
              features: [
                {
                  header: "Compact Design",
                  img: "path/to/image3.jpg",
                  text: "Fits easily into small spaces."
                }
              ]
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
              otherImgs: M7_series,
              size: "XL",
              color: ["Black"],
              features: [
                {
                  header: "High Performance",
                  img: "path/to/image4.jpg",
                  text: "Designed for high efficiency and performance."
                }
              ]
            }
          ]
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
              otherImgs: K3S_series_Silver,
              size: "S",
              color: ["Silver", "White"],
              features: [
                {
                  header: "Smart Technology",
                  img: "path/to/image5.jpg",
                  text: "Advanced digital controls for precision and efficiency."
                }
              ]
            },
            {
              id: 2,
              img: KM5_series.KM5_front,
              desc: "KM5 Series Easy Service Force Flue Gas Water Heater",
              otherImgs: KM5_series,
              size: "M",
              color: ["White"],
              features: [
                {
                  header: "Easy Maintenance",
                  img: "path/to/image6.jpg",
                  text: "Designed for easy servicing and maintenance."
                }
              ]
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
            {
              id: 1,
              img: K3SB_series.K3SB_front,
              desc: "K3SB Series Digital Balance Flue Gas Water Heater",
              otherImgs: K3SB_series,
              size: "L",
              color: ["Gray"],
              features: [
                {
                  header: "Modern Design",
                  img: "path/to/image7.jpg",
                  text: "Sleek and modern design for contemporary settings."
                }
              ]
            }
          ]
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
              otherImgs: E5_series,
              size: "XL",
              color: ["Black"],
              features: [
                {
                  header: "Weather Resistant",
                  img: "path/to/image8.jpg",
                  text: "Built to withstand harsh weather conditions."
                }
              ]
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

