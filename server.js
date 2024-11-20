import express from "express";

const posts = [
    {
      id: 1,
      description: "Uma foto",
      image: "https://place.dog/300/200",
    },
    {
      id: 2,
      description: "Um cachorro feliz brincando no parque",
      image: "https://placedog.net/600/400?random",
    },
    {
      id: 3,
      description: "Um filhote de cachorro dormindo em uma cesta",
      image: "https://placedog.net/300/200?random",
    },
    {
      id: 4,
      description: "Dois cachorros brincando de cabo de guerra",
      image: "https://placedog.net/400/300?random",
    },
    {
      id: 5,
      description: "Um cachorro correndo na praia",
      image: "https://placedog.net/500/300?random",
    },
    {
      id: 6,
      description: "Um cachorro olhando pela janela",
      image: "https://placedog.net/200/200?random",
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function getPostById(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}
app.get("/posts/:id", (req, res) => {
    const index = getPostById(req.params.id)
    res.status(200).json(posts[index]);
});
