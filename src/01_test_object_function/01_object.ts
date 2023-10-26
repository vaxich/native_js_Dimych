// объекты
type cityType = {
    title: string,
    countryTitle: string
}

type addressType = {
    streetTitle: string,
    city: cityType
}

type oneTehnologies = {
    id: number
    title: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    tehnologies: Array<oneTehnologies>
}

export const student: StudentType = {
    id: 1,
    name: "Pavel",
    age: 40,
    isActive: false,
    address: {
        streetTitle: "Lenins",
        city: {
            title: "Krasnodar",
            countryTitle: "Russian"
        }

    },
    tehnologies: [
        {
            id: 1,
            title: "html"
        },
        {
            id: 2,
            title: "css"
        },
        {
            id: 3,
            title: "js"
        }
    ]
}

//-------------

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

export type streetType = {
    title: string
}

export type AddressType = {
    number: number
    street: streetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}


