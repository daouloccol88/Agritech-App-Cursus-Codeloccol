import { useEffect } from "react";

const FirstTimeDataLoader = () => {
  useEffect(() => {
    // Initialize dummy data if first time
    if (!localStorage.getItem("firstTimeLoading")) {
      const users = [
        {
          id: "1",
          name: "Malika Malikatou",
          email: "Malikatou@mail.com",
          password: "123",
          role: "Spécialiste Environement",
          img: "/avatar-1.png",
        },
        {
          id: "2",
          name: "Leila Leilatou",
          email: "Leilatou@mail.com",
          password: "123",
          role: "Spécialiste en Production Végétale",
          img: "/avatar-4.jpeg",
        },
        {
          id: "3",
          name: "Amir Amirou",
          email: "Amirou@mail.com",
          password: "123",
          role: "Spécialiste en Viticulture",
          img: "/avatar-2.jpg",
        },
        {
          id: "4",
          name: "Abdou Abdourahmane",
          email: "Abdourahmane@mail.com",
          password: "123",
          role: "Spécialiste en gestion des sols et des eaux",
          img: "/avatar-3.png",
        },
      ];
      // Create 8 blogs
      /*const blogs = [
        {
          author: "user2",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-01-09T23:32:15.427Z",
          id: "1762817535428",
          category: "Jardinnage",
          img: "Blog-img-1.jpg",
          title: "Sample Blog 1",
        },
        {
          author: "user3",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-02-09T23:32:15.427Z",
          id: "1762817535421",
          category: "Contre-saison",
          img: "Blog-img-2.jpg",
          title: "Sample Blog 2",
        },
        {
          author: "user3",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!",
          createdAt: "2025-03-09T23:32:15.427Z",
          id: "1762817535422",
          category: "Désertification",
          img: "Blog-img-3.jpg",
          title: "Sample Blog 3",
        },
        {
          author: "user1",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-04-09T23:32:15.427Z",
          id: "1762817535423",
          category: "Pépinières",
          img: "Blog-img-4.jpg",
          title: "Sample Blog 4",
        },
        {
          author: "user2",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-05-09T23:32:15.427Z",
          id: "1762817535424",
          category: "Jardinnage",
          img: "Blog-img-5.jpg",
          title: "Sample Blog 5",
        },
        {
          author: "user1",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-06-09T23:32:15.427Z",
          id: "1762817535425",
          category: "Pépinières",
          img: "Blog-img-6.jpg",
          title: "Sample Blog 6",
        },
        {
          author: "user3",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-07-09T23:32:15.427Z",
          id: "1762817535426",
          category: "Jardinnage",
          img: "Blog-img-7.jpg",
          title: "Sample Blog 7",
        },
        {
          author: "user2",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-08-09T23:32:15.427Z",
          id: "1762817535427",
          category: "Contre-saison",
          img: "Blog-img-8.jpg",
          title: "Sample Blog 8",
        },
        {
          author: "user3",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex!Lorem ipsum dolor sit amet...",
          createdAt: "2025-09-09T23:32:15.427Z",
          id: "17628175354210",
          category: "Contre-saison",
          img: "Blog-img-9.jpg",
          title: "Sample Blog 9",
        },
        {
          author: "user1",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque dolorem possimus ipsum consectetur rem, ipsa magni nemo est dolore sapiente, architecto ex! Lorem ipsum dolor sit amet...",
          createdAt: "2025-10-09T23:32:15.427Z",
          id: "17628175354118",
          category: "Jardinnage",
          img: "Blog-img-10.jpg",
          title: "Sample Blog 10",
        },
      ];*/
      const blogs = [];
      const populateBlogs = () => {
        const categoryList = [
          "Jardinnage",
          "Contre-Saison",
          "Pépinières",
          "Désertification",
        ];

        const titleList = [
          "Lorem ipsum",
          "Ultricies nec",
          "Pretium quis",
          "Cras dapibus",
          "Donec sodales",
          "Velit cursus nunc",
          "Lorem dolor",
        ];
        const usersList = [];

        for (let i = 0; i < users.length; i++) {
          usersList.push(users[i].name);
        }

        function generateRandomTimestamp() {
          // Random helpers
          const rand = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;
          const pad = (num, size = 2) => String(num).padStart(size, "0");

          const year = rand(2010, 2020);
          const month = pad(rand(1, 12));
          const day = pad(rand(1, 30));
          const hour = pad(rand(0, 23));
          const minute = pad(rand(0, 59));
          const second = pad(rand(0, 59));
          const millisecond = pad(rand(0, 999), 3);

          return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}Z`;
        }

        for (let i = 0; i < 10; i++) {
          blogs.push({
            author: usersList[Math.floor(Math.random() * usersList.length)],
            content:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremtLorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae unde natus, culpa eius aliquam adipisci labore itaque doloremt",
            createdAt: generateRandomTimestamp(),
            id: Math.random() * 1000,
            category:
              categoryList[Math.floor(Math.random() * categoryList.length)],
            img: "Blog-img-" + (i + 1) + ".jpg",
            title: titleList[Math.floor(Math.random() * titleList.length)],
          });
        }
      };

      populateBlogs();

      localStorage.setItem("blogs", JSON.stringify(blogs));
      localStorage.setItem("users", JSON.stringify(users));
      // Create 3-5 comments per blog
      const comments = [];
      const dummyNames = [
        "Ali",
        "Mariam",
        "Idi",
        "oumma",
        "Salissou",
        "Ramatou",
      ];
      const dummyTexts = [
        "Excellente Formation!",
        "Merci du partage.",
        "J'ais trouvé cet article très utile.",
        "Formation intéressante!",
        "Pouvez vous donnez plus de détail à ce sujet?",
      ];

      blogs.forEach((b) => {
        const numComments = Math.floor(Math.random() * 6) + 2;
        for (let j = 0; j < numComments; j++) {
          const name =
            dummyNames[Math.floor(Math.random() * dummyNames.length)];
          const email = `${name.toLowerCase()}${Math.floor(
            Math.random() * 100
          )}@example.com`;
          const text =
            dummyTexts[Math.floor(Math.random() * dummyTexts.length)];

          comments.push({
            id: Date.now() + Math.floor(Math.random() * 10000),
            blogId: b.id,
            name,
            email,
            text,
            createdAt: new Date(Date.now() - j * 3600000).toISOString(),
          });
        }
      });

      localStorage.setItem("comments", JSON.stringify(comments));

      localStorage.setItem("firstTimeLoading", "false");
    }
  }, []);
  return null;
};

export default FirstTimeDataLoader;
