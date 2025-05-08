export const color = [
    "white",
    "black",
    "brown",
    "red",
    "gray",
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'Trắng', checked: false },
            { value: 'black', label: 'Đen', checked: false },
            { value: 'brown', label: 'Nâu', checked: true },
            { value: 'red', label: 'Đỏ', checked: false },
            { value: 'gray', label: 'Xám', checked: false },

        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

export const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]