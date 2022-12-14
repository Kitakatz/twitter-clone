
export interface Tweet {
  id: string;
  author: string;
  tweet: string;
  replies: Reply[];
  likes: number;
};

interface Reply {
  id: string;
  author: string;
  tweet: string;
};

export const tweets: Tweet[] = [
  {
    id: "01",
    author: "AWS Amplify",
    tweet:
      "NEW Amplify Flutter Authentication support for Web and Desktop (Developer Preview) ππ»ππ» With the latest release from AWS Amplify Flutter, you can set up a fully functional authentication flows for Mobile, Web and Desktop π±πΈπ₯",
    likes: 32,
    replies: [
      {
        id: '01',
        author: 'Michael',
        tweet: 'I am a tweet.'
      },
      {
        id: '02',
        author: 'Andrew',
        tweet: 'I am another tweet.'
      }
    ]
  },
  {
    id: "02",
    author: "AWS Amplify",
    tweet:
      "Excited to be at @AllThingsOpen in Raleigh, NC next week with our friends at @AWSOpen Read about our plans below! π π https://go.aws/3VYrQOh",
    likes: 20,
    replies: []
  },
  {
    id: "03",
    author: "AWS Amplify",
    tweet:
      "The wait is over, say hello to the new Amplify Library for Swift! π We listened to you and we are happy to announce beta support for macOS!!",
    likes: 101,
    replies: []
  },
];