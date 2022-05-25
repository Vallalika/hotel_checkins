use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        customer_name: "Valerie",
        email: "xxx.sss@gmail.com",
        checkin: true
    },
    {
        customer_name: "Emilio",
        email: "xxx.yyy@gmail.com",
        checkin: true
    },
    {
        customer_name: "Juju",
        email: "xxxsdsd.sss@protonmail.com",
        checkin: false
    }
]);