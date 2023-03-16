export const navigationMenu = [
    {
        id: 1, name: "Products", child: [
            { id: 1, name: "Compare Card Reader", isNew: false },
            { id: 2, name: "Solo Card Reader", isNew: true },
            { id: 3, name: "Plus Card Reader", isNew: false },
            { id: 4, name: "SumUp POS", isNew: false }
        ], isNew: false
    },
    {
        id: 2, name: "Business Account", child: [], isNew: true
    },
    {
        id: 3, name: "Sell More", child: [
            { id: 1, name: "Loyalty", isNew: false },
            { id: 2, name: "Invoices", isNew: false },
            { id: 3, name: "QR Codes", isNew: false },
            { id: 4, name: "Gift Cards", isNew: false }
        ], isNew: false
    },
    { id: 4, name: "Pricing", child: [], isNew: false },
    {
        id: 5, name: "Help", child: [{ id: 1, name: "Help Center", isNew: false },
        { id: 2, name: "Contact Us", isNew: false }], isNew: false
    }

]