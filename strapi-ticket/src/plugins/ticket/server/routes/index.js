module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'ticket.find',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "ticket.create",
    config: {
      policies: [],
      auth: false
    },
  },

  // respond to a ticket
  {
    method: "POST",
    path: "/respond/:id",
    handler: "ticket.respond",
    config: {
      policies: [],
      auth: false
    },
  },

  

  // update status to resolved ticket 

  {
    method: "PUT",
    path: "/resolve/:id",
    handler: "ticket.resolve",
    config: {
      policies: [],
      auth: false
    },
  },
  // update status to spam ticket (main threadID)

  {
    method: "PUT",
    path: "/spam/:id",
    handler: "ticket.spam",
    config: {
      policies: [],
      auth: false
    },
  },
  // update status to read ticket 

  {
    method: "PUT",
    path: "/read/:id",
    handler: "ticket.read",
    config: {
      policies: [],
      auth: false
    },
  },

  {
    method: "POST",
    path: "/sendEmail",
    handler: "ticket.sendEmail",
    config: {
      policies: [],
      auth: false
    },
  },

  {
    method: "POST",
    path: "/receiveEmail",
    handler: "ticket.receiveEmail",
    config: {
      policies: [],
      auth: false
    },
  },


];
