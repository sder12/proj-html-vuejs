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