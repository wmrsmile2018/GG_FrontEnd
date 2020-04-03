import React, {Component} from 'react';
import Post from '../../elements/post/index'

const obj= [
  {
    "id_post": "5e73658931da434191c94547",
    "avatar": "https://lh3.googleusercontent.com/proxy/XNpIZWrc6llsUJE29w0lY9pmsxwJvfgbRZ6QLoVHF-P5ZP-kznu-246CfR4TFss-y9QowscUfL1dDavM2jja6lCkNel11QfDK5ePijyaYKXruTYDlpIqRnzCfp1xsNMcNvXsRaff59iWvjI",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Ullamco officia duis labore est. Eiusmod occaecat officia est non sint aliqua consectetur aliqua. Fugiat amet minim magna cupidatat ut eiusmod qui veniam labore consectetur duis qui et. Cupidatat nulla velit sit esse. Tempor non cillum nulla excepteur velit sit. Deserunt consequat minim dolore aliquip nulla sint excepteur ullamco. Et adipisicing irure esse Lorem sint deserunt pariatur anim adipisicing fugiat ad.\r\n",
    "photos": [
      {
        "id_photo": "5e736589ab0635e2ba339736",
        "photo": "https://via.placeholder.com/640x360"
      },
      {
        "id_photo": "5e7365890ca7448d10c83878",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPo6WfnUxzDdXuyiXxC6j4W7cMP3h-jfzE0zUeChJqfZVLk12Q"
      },
      {
        "id_photo": "5e736589ab0635e2ba339736",
        "photo": "https://via.placeholder.com/640x360"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e73658944562d8ad0c5fe3c",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Laboris deserunt proident excepteur nisi. Nostrud ea minim et velit commodo nisi dolor id. Pariatur nisi culpa esse aute cupidatat sit reprehenderit exercitation Lorem culpa id magna incididunt.\r\n",
    "photos": [
      {
        "id_photo": "5e736589019c7815086ece6e",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e73658940c1a90e7144c557",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e7365890a99406cc9b1a8e6",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e7365890495923eb08e9203",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Adipisicing voluptate mollit laboris adipisicing aute voluptate eu non culpa. Dolore sint consectetur voluptate laboris sit tempor occaecat nostrud Lorem anim. Sit do cillum eu in ad. Irure laboris officia cillum non incididunt dolore nulla non sit ut sunt reprehenderit eiusmod. Aliquip non aliqua elit ullamco. Et sint veniam ea do id sit.\r\n",
    "photos": [
      {
        "id_photo": "5e736589c088ec11b2dec26c",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e7365892912ac3af2aa55a6",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e7365895853a7ad4bf85ac3",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e736589ba56b75b941899f9",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Duis aliqua exercitation nostrud veniam duis esse occaecat nostrud et. Dolore sint ad officia sint. Cillum eiusmod exercitation ea reprehenderit voluptate cupidatat ullamco eu dolor. Dolore et exercitation magna irure ad ut occaecat. Nostrud id elit in excepteur excepteur esse in. Et exercitation culpa veniam consectetur ut. Commodo in pariatur officia Lorem do occaecat esse culpa ad Lorem.\r\n",
    "photos": [
      {
        "id_photo": "5e7365895fac840024767bef",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e736589073ceccc3945d858",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e736589716ced8285c995cd",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e73658958b2d33b3d2f6819",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Qui sunt proident sint enim cupidatat velit ipsum eiusmod adipisicing. Elit cillum et fugiat do cillum culpa laboris eu sint officia. Dolore nulla cupidatat laboris duis commodo ut nulla. Eu incididunt Lorem eiusmod cupidatat sunt reprehenderit velit. Esse amet aliquip amet dolor dolor esse enim aute consectetur id consectetur eiusmod cupidatat. Nisi excepteur cillum do id non mollit.\r\n",
    "photos": [
      {
        "id_photo": "5e736589c20a385ce0b80233",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e736589e1fafa653e79e181",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e7365890de3535857585d4a",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e73658915706fd854ea0218",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Mollit ad cillum ex Lorem velit veniam anim fugiat qui. Eiusmod cillum minim eu sunt excepteur non proident commodo. Id reprehenderit dolore in cupidatat nisi dolore nisi aute. Eiusmod veniam culpa nostrud in ullamco laboris incididunt incididunt cillum et. Esse ea non aute minim aliquip duis.\r\n",
    "photos": [
      {
        "id_photo": "5e7365896f9a2921b945ccb2",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e736589dfa9324b60df5e27",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e73658980dd9b0651d6e92c",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  },
  {
    "id_post": "5e736589e83207997c08e4bf",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Ullamco velit ad do in ex reprehenderit irure in aliquip aliquip amet. Veniam incididunt pariatur ipsum laborum ex ipsum incididunt cupidatat officia dolor labore ullamco ipsum. Et velit proident exercitation aliqua fugiat labore. Lorem ad est nisi officia fugiat pariatur adipisicing ipsum minim consectetur consequat consequat incididunt.\r\n",
    "photos": [
      {
        "id_photo": "5e7365890059099d5f43adf8",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e736589e72e486404e5712a",
        "photo": "http://placehold.it/32x32"
      },
      {
        "id_photo": "5e7365895ee88a6bfdf7a461",
        "photo": "http://placehold.it/32x32"
      }
    ],
    "likes": 10,
    "dislikes": 20,
    "comments": 7
  }
];
// const tmpObj = JSON.parse('[{ "name":"John", "age":30, "city":"New York"},{ "name":"John", "age":30, "city":"New York"}]');

// console.log(JSON.stringify(obj));
// console.log(JSON.parse(JSON.stringify(obj)));
// console.log(obj[0].photos.length)
class News extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="news">
        <Post
          idPost={obj[0].id_post}
          classN="News"
          avatar={obj[0].avatar}
          author={obj[0].author}
          date={obj[0].date}
          time={obj[0].time}
          text={obj[0].text}
          photos={obj[0].photos}
          likes={obj[0].likes}
          dislikes={obj[0].dislikes}
          comments={obj[0].comments}
          />
      </div>
    )
  }
}

export default News;
