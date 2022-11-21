import { reactive } from "vue";

export const store = reactive({
    // Nav for footer and header
    // active --> current page, highlighted in headerNav
    navMenu: [
        {
            name: "home",
            url: "/home",
            active: true,
            headerShow: true,
            footerShow: false,
        },
        {
            name: "shop",
            url: "/shop",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "about",
            url: "/about",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "gallery",
            url: "/gallery",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "locations",
            url: "/locations",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "journal",
            url: "/journal",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "contact",
            url: "/contact",
            active: false,
            headerShow: true,
            footerShow: true,
        },
        {
            name: "my account",
            url: "/my account",
            active: false,
            headerShow: true,
            footerShow: false,
        },
        {
            name: "orders",
            url: "/orders",
            active: false,
            headerShow: false,
            footerShow: true,
        },
        {
            name: "cart",
            url: "/cart",
            active: false,
            headerShow: true,
            footerShow: true,
        }
    ],
    //Social Network 
    socialNetwork: [
        {
            name: "instagram",
            url: "/instagram",
            // <i class="fa-brands fa-instagram"></i>
        },
        {
            name: "twitter",
            url: "/twitter",
            // <i class="fa-brands fa-twitter"></i>
        },
        {
            name: "facebook",
            url: "/facebook",
            // <i class="fa-brands fa-facebook-f"></i>
        },
        {
            name: "pinterest",
            url: "/pinterest",
            // <i class="fa-brands fa-pinterest-p"></i>
        }
    ],
    //Section Title + subtitle 
    //DO NOT CHANGE THE ORDER: extractive through index
    sectionsTitle: [
        {
            title: "Baking Special Moments",
            subtitle: "Corporate & Weddings"
        },
        {
            title: "Visit our Bakeries",
            subtitle: "Locations"
        }
    ],

    products: [

        {
            prod: "Choco Chip Cookies",
            type: "Cookies, Pastries",
            price: "$19.00 - $39.00",
            image: "../assets/img/slider/choco-chip-cookies-600x765.jpg"
        },
        {
            prod: "Strawberry Jam Cookies",
            type: "Cookies, Pastries",
            price: "$24.00 - $62.00",
            image: "../assets/img/slider/strawberry-jam-cookies-600x765.jpg"
        },
        {
            prod: "Strawberry Donut",
            type: "Donut, Pastries",
            price: "$24.00 - $24.00",
            image: "../assets/img/slider/strawberry-donut-600x765.jpg"
        },
        {
            prod: "Perfect Macarons",
            type: "Macarons, Pastries",
            price: "$18.00 - $52.00",
            image: "../assets/img/slider/perfect-macarons-600x765.jpg"
        }

    ]
});




// USED FONTAWSOME ICON
/* <i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-facebook-f"></i>
<i class="fa-brands fa-pinterest-p"></i>

<i class="fa-solid fa-cart-shopping"></i>

<i class="fa-solid fa-chevron-up"></i>
<i class="fa-solid fa-chevron-right"></i>
<i class="fa-solid fa-chevron-left"></i> */