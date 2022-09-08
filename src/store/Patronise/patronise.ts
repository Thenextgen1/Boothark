import coldstone from "../../assets/coldstone.png"
import chicken from "../../assets/chicken.png"
import dominos from "../../assets/dominos.png"
import lesukka from "../../assets/lesukka.png"


export const patronise = [
    {
        "name": "Lesukaa Restaurant (Catering Service & Food Delivery)",
        "star_count": "4.0",
        "rate_count": 39,
        "location": "Restaurant  Plot 337 Peter Odili Road Abuloma Best",
        "period": "Open 24 hours",
        "service_offered": ["Dine-in", "Takeaway", "Delivery"],
        "thumbnail": lesukka,
        "address": "Restaurant  Plot 337 Peter Odili Road Abuloma Best",
        "website": "https://www.lesukka.com/",
        "phone": "+2348090165975",
        "open": "Open now: 7am-10pm",
        "updated": "Updated by business 2 weeks ago"
    },
    {
        "name": "Dominos Pizza Peter Odili, Port Harcourt",
        "star_count": 4.3,
        "rate_count": 221,
        "location": "Pizza   Plot 330 A/C Peter Odili Road, Port Harcourt, Rivers State.",
        "period": "Open until 22:00",
        "service_offered": ["Dine-in", "Curbside pickup", "No-contact delivery"],
        "thumbnail": dominos,
        "address": "Restaurant  Plot 337 Peter Odili Road Abuloma Best",
        "website": "https://www.dominos.com.ng/",
        "phone": "+2348090165975",
        "open": "Open now: 7am-10pm",
        "updated": "Updated by business 2 weeks ago"
    },
    {
        "name": "Chicken Republic - Doxa Road",
        "star_count": 4.6,
        "rate_count": 13,
        "location": "Fast Food   Doxa Family Church Rd",
        "period": "Open until 22:00",
        "service_offered": ["Dine-in", "Takeaway", "Delivery"],
        "thumbnail": chicken,
        "address": "Restaurant  Plot 337 Peter Odili Road Abuloma Best",
        "website": "https://www.chicken-republic.com/",
        "phone": "+2348090165975",
        "open": "Open now: 7am-10pm",
        "updated": "Updated by business 2 weeks ago"
    },
    {
        "name": "Country Creamery",
        "star_count": 4.4,
        "rate_count": 23,
        "location": "Pizza   8 Okuru Abuloma Link Road Phalga",
        "period": "Open until 22:00",
        "service_offered": ["Dine-in", "Takeaway", "Delivery"],
        "thumbnail": coldstone,
        "address": "Restaurant  Plot 337 Peter Odili Road Abuloma Best",
        "website": "https://www.coldstonecreamery.com/",
        "phone": "+2348090165975",
        "open": "Open now: 7am-10pm",
        "updated": "Updated by business 2 weeks ago"
    }
]

export function getPlaces(name:string|undefined ) {
    return patronise.find(
        (place) => place.name === name
    );
}