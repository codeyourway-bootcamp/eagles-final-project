export const user_registration = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      {
        labels: ["user_id", "user_company", "user_email", "user_password"],
        data: [
          {
            user_id: "123456",
            user_name: "Wellington",
            user_email: "wellington@projecteagle.com",
            user_password: "123456",
          },
          {
            user_id: "234567",
            user_name: "Ana Emmily",
            user_email: "anaemilly@projecteagle.com",
            user_password: "234567",
          },
          {
            user_id: "345678",
            user_name: "Pedro Lucca",
            user_email: "pedrolucca@projecteagle.com",
            user_password: "345678",
          },
          {
            user_id: "456789",
            user_name: "Amário",
            user_email: "amario@projecteagle.com",
            user_password: "456789",
          },
        ],
      },
      2000
    );
  });
});

  export const contacts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          labels: [
            "user_id",
            "contacts_full_name",
            "contacts_phone",
            "contacts_email",
            "contacts_address",
            "contacts_social_network",
          ],
          data: {
            user_id: "00001",
            contacts_full_name: "Wellington Martins",
            contacts_phone: "+351932471578",
            contacts_email: "wellington@eagles.com",
            contacts_address: "Rua de Santiagos",
            contacts_social_network: "wellington.com",
          },
        },
        2000
      );
    });
  });

 

