```js
{
  session: {
    errors: ["Invalid credentials"],
    currentUser: {
      id: 1,
      username: 'gevuong',
      password: "fruitS123",
      events: [4, 2, 7], // user created event_ids
      tickets: {3: 1, 86: 3, 2: 5}, // each ticket is going to have its own event_id; each event_id has a quantity of tickets
      bookmarks: [3, 6, 2]
      bookmarks: {event_id: 3, :6, 2:2}
    }
  },

  event: {
    errors: [],
    events: {
      1: {
        id: 1,
        organizer_id: 1,
        title: 'Reggae in the Bay',
        description: '...',
        location: 'Santa Clara County Fairgrounds',
        date: 'July 22, 2017',
        image: image_url,
        ticket_price: 30,
        ticket_quantity: 100,
        category_id: [1, 2, 3]  
      },

      2: {
        id: 2,
        organizer_id: 1,
        title: 'Walk by Golden Gate',
        description: '...',
        location: 'Crissy Field',
        date: 'September 21, 2017',
        image: image_url,
        ticket_price: 0,
        ticket_quantity: 100,
        category_id: [1, 2, 3]
      }
    }
  }

  // bookmarks: {
  //   1: {
  //     event_id: 1,
  //     user_id: 1
  //   },
  // }

  // errors: {
  //   session: [],
  //   events: [],
  //   bookmarks: []
  // }
}
```
