'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button } from '../components/Button';
import firebase from 'firebase';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
   return (
    <View>
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image_url}} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>{this.props.name}</Text>
        <Text style={styles.text}>Rating: {this.props.rating}</Text>
        <Text style={styles.text}>Phone: {this.props.display_phone}</Text>
        <Text style={styles.text}>Distance: {this.props.distance} ft.</Text>
      </View>
    </View>	
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
    {
      "id": "grillin-wings-and-things-denver",
      "name": "Grillin' Wings & Things",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/tycJcKwVZr7DdwPsalIoOA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/grillin-wings-and-things-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 200,
      "categories": [
        {
          "alias": "chicken_wings",
          "title": "Chicken Wings"
        },
        {
          "alias": "gluten_free",
          "title": "Gluten-Free"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.70324,
        "longitude": -104.95956
      },
      "transactions": [
        "pickup",
        "delivery"
      ],
      "price": "$$",
      "location": {
        "address1": "723 S University Blvd",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "723 S University Blvd",
          "Denver, CO 80209"
        ]
      },
      "phone": "+17205707800",
      "display_phone": "(720) 570-7800",
      "distance": 628.9433973352
    },
    {
      "id": "vert-kitchen-denver",
      "name": "Vert Kitchen",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3PIKymtg30XvOLNSmzJAMA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/vert-kitchen-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 375,
      "categories": [
        {
          "alias": "french",
          "title": "French"
        },
        {
          "alias": "sandwiches",
          "title": "Sandwiches"
        },
        {
          "alias": "soup",
          "title": "Soup"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.70376,
        "longitude": -104.9800999
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "704 S Pearl St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "704 S Pearl St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13039975941",
      "display_phone": "(303) 997-5941",
      "distance": 1210.6157795975998
    },
    {
      "id": "fooducopia-denver",
      "name": "Fooducopia",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xk_7Wy7rnT3f6wGUeghX0A/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/fooducopia-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 239,
      "categories": [
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        },
        {
          "alias": "wine_bars",
          "title": "Wine Bars"
        },
        {
          "alias": "sandwiches",
          "title": "Sandwiches"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7003199,
        "longitude": -104.9642781
      },
      "transactions": [
        "delivery",
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "1939 E Kentucky Ave",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1939 E Kentucky Ave",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037227838",
      "display_phone": "(303) 722-7838",
      "distance": 625.67437718
    },
    {
      "id": "devils-food-bakery-and-cookery-denver",
      "name": "Devil's Food Bakery & Cookery",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/nE_z8iN_qcLbYddJHTzb2w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/devils-food-bakery-and-cookery-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 560,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        },
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.697997,
        "longitude": -104.961609
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1020 S Gaylord St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1020 S Gaylord St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037337448",
      "display_phone": "(303) 733-7448",
      "distance": 948.6129906149998
    },
    {
      "id": "wash-perk-denver",
      "name": "Wash Perk",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/KI48x3H7ZlOeR9p7Qa5jmg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/wash-perk-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 204,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        },
        {
          "alias": "bakeries",
          "title": "Bakeries"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7022199,
        "longitude": -104.9770999
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "853 E Ohio Ave",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "853 E Ohio Ave",
          "Denver, CO 80209"
        ]
      },
      "phone": "+17205429202",
      "display_phone": "(720) 542-9202",
      "distance": 1005.0723071101999
    },
    {
      "id": "aikopops-denver-3",
      "name": "AikoPops",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/E-Zx6Q_rQjvoPzi0b8EVmw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/aikopops-denver-3?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 223,
      "categories": [
        {
          "alias": "icecream",
          "title": "Ice Cream & Frozen Yogurt"
        },
        {
          "alias": "sandwiches",
          "title": "Sandwiches"
        },
        {
          "alias": "soup",
          "title": "Soup"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 39.69321,
        "longitude": -104.98008
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "1284 S Pearl St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80210",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1284 S Pearl St",
          "Denver, CO 80210"
        ]
      },
      "phone": "+13039966400",
      "display_phone": "(303) 996-6400",
      "distance": 1834.250253954
    },
    {
      "id": "homegrown-tap-and-dough-wash-park-denver",
      "name": "Homegrown Tap & Dough - Wash Park",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/m4aoNq216W1Nj3jmZhuFDQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/homegrown-tap-and-dough-wash-park-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 182,
      "categories": [
        {
          "alias": "pizza",
          "title": "Pizza"
        },
        {
          "alias": "italian",
          "title": "Italian"
        },
        {
          "alias": "beergardens",
          "title": "Beer Gardens"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.69826,
        "longitude": -104.962038
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1001 S Gaylord St",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1001 S Gaylord St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+17204598736",
      "display_phone": "(720) 459-8736",
      "distance": 906.88079274
    },
    {
      "id": "finleys-pub-denver",
      "name": "Finley's Pub",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/3SldwbzDV3P6Y7NmEn4N4Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/finleys-pub-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 143,
      "categories": [
        {
          "alias": "burgers",
          "title": "Burgers"
        },
        {
          "alias": "irish_pubs",
          "title": "Irish Pub"
        },
        {
          "alias": "salad",
          "title": "Salad"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.70973,
        "longitude": -104.98069
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "375 S Pearl St",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "375 S Pearl St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13032824790",
      "display_phone": "(303) 282-4790",
      "distance": 1303.9739470523998
    },
    {
      "id": "luciles-creole-cafe-denver",
      "name": "Lucile's Creole Cafe",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/-CyjqHxCBXXZIwAvoTZikg/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/luciles-creole-cafe-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 753,
      "categories": [
        {
          "alias": "cajun",
          "title": "Cajun/Creole"
        },
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7116588056087,
        "longitude": -104.982845708728
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "275 S Logan St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "275 S Logan St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13032826258",
      "display_phone": "(303) 282-6258",
      "distance": 1560.26720005
    },
    {
      "id": "charcoal-bistro-denver",
      "name": "Charcoal Bistro",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/QF0uF81jbA4wOp6m-X6xjQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/charcoal-bistro-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 35,
      "categories": [
        {
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.6978340148926,
        "longitude": -104.961410522461
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "1028 S Gaylord St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1028 S Gaylord St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13039538718",
      "display_phone": "(303) 953-8718",
      "distance": 970.113048812
    },
    {
      "id": "chowder-room-denver",
      "name": "Chowder Room",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZigZKgmPYryK8Aaz9bK7RQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/chowder-room-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 214,
      "categories": [
        {
          "alias": "seafood",
          "title": "Seafood"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.706417,
        "longitude": -104.98716
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "560 S Broadway",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "560 S Broadway",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037773474",
      "display_phone": "(303) 777-3474",
      "distance": 1797.24251505
    },
    {
      "id": "bittersweet-artisanal-cuisine-denver",
      "name": "Bittersweet Artisanal Cuisine",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/RG9JIo-0x79LbMl_SBifSA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/bittersweet-artisanal-cuisine-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 178,
      "categories": [
        {
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "french",
          "title": "French"
        },
        {
          "alias": "italian",
          "title": "Italian"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7109413,
        "longitude": -104.9812088
      },
      "transactions": [],
      "price": "$$$",
      "location": {
        "address1": "500 E Alameda Ave",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "500 E Alameda Ave",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13039420320",
      "display_phone": "(303) 942-0320",
      "distance": 1393.000286216
    },
    {
      "id": "wash-park-sports-alley-denver",
      "name": "Wash Park Sports Alley",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/VOMRSJxjHU7HOa7DCzfmtQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/wash-park-sports-alley-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 118,
      "categories": [
        {
          "alias": "sportsbars",
          "title": "Sports Bars"
        },
        {
          "alias": "pubs",
          "title": "Pubs"
        },
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7116212546825,
        "longitude": -104.973333254457
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "266B S Downing St",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "266B S Downing St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13036356691",
      "display_phone": "(303) 635-6691",
      "distance": 898.8548532259999
    },
    {
      "id": "rosebud-cafe-denver",
      "name": "Rosebud Cafe",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qvej3VzQwLHXbFnZ-8le0Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/rosebud-cafe-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 43,
      "categories": [
        {
          "alias": "cafes",
          "title": "Cafes"
        },
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 39.71812,
        "longitude": -104.98123
      },
      "transactions": [
        "pickup"
      ],
      "price": "$",
      "location": {
        "address1": "90 Pennsylvania St",
        "address2": "",
        "address3": null,
        "city": "Denver",
        "zip_code": "80203",
        "country": "US",
        "state": "CO",
        "display_address": [
          "90 Pennsylvania St",
          "Denver, CO 80203"
        ]
      },
      "phone": "+13035932119",
      "display_phone": "(303) 593-2119",
      "distance": 1896.8363600159998
    },
    {
      "id": "the-saucy-noodle-ristorante-denver",
      "name": "The Saucy Noodle Ristorante",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/cShdFaQjxQpZ2ErzQWEGuQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-saucy-noodle-ristorante-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 211,
      "categories": [
        {
          "alias": "italian",
          "title": "Italian"
        },
        {
          "alias": "pizza",
          "title": "Pizza"
        }
      ],
      "rating": 3.5,
      "coordinates": {
        "latitude": 39.7032082,
        "longitude": -104.9595613
      },
      "transactions": [
        "delivery",
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "727 S University Blvd",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "727 S University Blvd",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037336977",
      "display_phone": "(303) 733-6977",
      "distance": 640.311163546
    },
    {
      "id": "taki-sushi-denver",
      "name": "Taki Sushi",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/2HEzL7IsWPRlS_ofo7AW6g/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/taki-sushi-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 414,
      "categories": [
        {
          "alias": "sushi",
          "title": "Sushi Bars"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.7145538330078,
        "longitude": -104.982200622559
      },
      "transactions": [
        "delivery",
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "420 E Bayaud Ave",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "420 E Bayaud Ave",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13032820111",
      "display_phone": "(303) 282-0111",
      "distance": 1678.2540309419999
    },
    {
      "id": "max-gill-and-grill-denver",
      "name": "Max Gill and Grill",
      "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/tixekwin0JKIl8yvAHg2WQ/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/max-gill-and-grill-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 381,
      "categories": [
        {
          "alias": "seafood",
          "title": "Seafood"
        },
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.69742,
        "longitude": -104.96142
      },
      "transactions": [
        "delivery"
      ],
      "price": "$$",
      "location": {
        "address1": "1052 S Gaylord St",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "1052 S Gaylord St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037227456",
      "display_phone": "(303) 722-7456",
      "distance": 1012.1514236219999
    },
    {
      "id": "telegraph-neighborhood-bistro-and-bar-denver-2",
      "name": "Telegraph Neighborhood Bistro and Bar",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/n4zaVwztfl47-clzlvaT9w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/telegraph-neighborhood-bistro-and-bar-denver-2?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 148,
      "categories": [
        {
          "alias": "cocktailbars",
          "title": "Cocktail Bars"
        },
        {
          "alias": "newamerican",
          "title": "American (New)"
        },
        {
          "alias": "desserts",
          "title": "Desserts"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.71128,
        "longitude": -104.98179
      },
      "transactions": [],
      "price": "$$",
      "location": {
        "address1": "295 S Pennsylvania St",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "295 S Pennsylvania St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+17204409846",
      "display_phone": "(720) 440-9846",
      "distance": 1451.071710776
    },
    {
      "id": "candle-light-tavern-denver",
      "name": "Candle Light Tavern",
      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/F_60LT_FpKTkNSqrvP97fA/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/candle-light-tavern-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 91,
      "categories": [
        {
          "alias": "divebars",
          "title": "Dive Bars"
        },
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        }
      ],
      "rating": 4,
      "coordinates": {
        "latitude": 39.709529876709,
        "longitude": -104.980682373047
      },
      "transactions": [],
      "price": "$",
      "location": {
        "address1": "383 S Pearl St",
        "address2": "",
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "383 S Pearl St",
          "Denver, CO 80209"
        ]
      },
      "phone": "+13037789530",
      "display_phone": "(303) 778-9530",
      "distance": 1305.052269226
    },
    {
      "id": "washington-park-denver",
      "name": "Washington Park",
      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YS3nucxvtVxcUn1Ayuai5w/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/washington-park-denver?adjust_creative=n3Gy9SxwCVWab6TDeN5gow&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=n3Gy9SxwCVWab6TDeN5gow",
      "review_count": 178,
      "categories": [
        {
          "alias": "parks",
          "title": "Parks"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 39.692992787005,
        "longitude": -104.973420908574
      },
      "transactions": [],
      "location": {
        "address1": "S Downing St & E Louisiana Ave",
        "address2": null,
        "address3": "",
        "city": "Denver",
        "zip_code": "80209",
        "country": "US",
        "state": "CO",
        "display_address": [
          "S Downing St & E Louisiana Ave",
          "Denver, CO 80209"
        ]
      },
      "phone": "",
      "display_phone": "",
      "distance": 1544.1615690659999
    }
  ]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
    let CARD_REFRESH_LIMIT = 3
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
      if (!this.state.outOfCards) {
      	alert('No more matches!')
      }

    }

  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'flex-start',
    margin: 10,
    height: 400,
    marginTop: 50,
    backgroundColor: 'white'
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 15,
    marginLeft: 10
  },
  noMoreCards: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})