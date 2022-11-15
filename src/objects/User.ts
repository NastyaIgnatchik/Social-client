import FeedPost from "./FeedPost";

export default class User {
    id: number;
    email: string;
    profileImageLink: string;
    name: string;
    surname: string;
    posts: FeedPost[];
    likedPosts: FeedPost[];

    constructor(name: string, surname: string, email: string, profileImageLink: string) {
        //A random number is not the same as a unique number.
        //There is absolutely no guarantee of uniqueness in a collection of randomly generated numbers.
        this.id = Math.floor(Math.random() * 100);
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.profileImageLink = profileImageLink;
    }
}