import { v4 as uuidu4 } from 'uuid';

const posts = [
    {
        id: uuidu4(),
        imageSrc: "https://traktirsuzdal.ru/uploads/c654ca862b554dc16d6beb12a2396d2c.jpg",
        title: "post 1",
        topics: ["post", "first post"],
        description: "this is a post description"
    },{
        id: uuidu4(),
        imageSrc: "https://i.ytimg.com/vi/CTCVaslgLCY/hqdefault.jpg",
        title: "post 2",
        topics: ["post", "sec post"],
        description: "this is a post description"
    },{
        id: uuidu4(),
        imageSrc: "https://traktirsuzdal.ru/uploads/c654ca862b554dc16d6beb12a2396d2c.jpg",
        title: "post 5",
        topics: ["post", "tirth post"],
        description: "this is a post description"
    },{
        id: uuidu4(),
        imageSrc: "https://i.ytimg.com/vi/CTCVaslgLCY/hqdefault.jpg",
        title: "post 4",
        topics: ["post", "fourth post"],
        description: "this is a post description"
    },{
        id: uuidu4(),
        imageSrc: "https://traktirsuzdal.ru/uploads/c654ca862b554dc16d6beb12a2396d2c.jpg",
        title: "post 5",
        topics: ["post", "5th post"],
        description: "this is a post description"
    },{
        id: uuidu4(),
        imageSrc: "https://i.ytimg.com/vi/CTCVaslgLCY/hqdefault.jpg",
        title: "post 6",
        topics: ["post", "6th post"],
        description: "this is a post description"
    },
]

export default posts;