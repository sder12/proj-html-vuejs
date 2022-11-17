import { reactive } from "vue";

export const store = reactive({
    navHeader: [
        {
            name: "home",
            url: "/home",
            active: true
        },
        {
            name: "shop",
            url: "/shop",
            active: false
        },
        {
            name: "about",
            url: "/about",
            active: false
        },
        {
            name: "gallery",
            url: "/gallery",
            active: false
        },
        {
            name: "locations",
            url: "/locations",
            active: false
        },
        {
            name: "journal",
            url: "/journal",
            active: false
        },
        {
            name: "contact",
            url: "/contact",
            active: false
        },
        {
            name: "my account",
            url: "/my account",
            active: false
        },
        {
            name: "cart",
            url: "/cart",
            active: false
        }
    ],
    navFooter: [
        {
            name: "shop",
            url: "/shop",
            active: false
        },
        {
            name: "about",
            url: "/about",
            active: false
        },
        {
            name: "gallery",
            url: "/gallery",
            active: false
        },
        {
            name: "locations",
            url: "/locations",
            active: false
        },
        {
            name: "journal",
            url: "/journal",
            active: false
        },
        {
            name: "contact",
            url: "/contact",
            active: false
        },
        {
            name: "orders",
            url: "/orders",
            active: false
        },
        {
            name: "cart",
            url: "/cart",
            active: false
        }
    ],
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