import React, {Component} from 'react';
import Post from '../../elements/post/index'


const tmpObj = [
  {
    "id_post": "5e724471c72b3b7f6129787c",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Sunt voluptate est consequat non laboris. Consequat laborum Lorem cupidatat ut est commodo velit dolor quis in aute veniam in. Id tempor duis cillum qui incididunt adipisicing esse voluptate. Deserunt aute anim aliqua irure culpa laborum elit voluptate nulla aliquip proident laborum ullamco. Laboris aute adipisicing nulla proident ullamco dolor velit ex do eu consectetur reprehenderit. Quis exercitation ullamco aliqua cupidatat et aliquip incididunt labore.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e724471d1fa720712ed2548"
      },
      {
        "id_com": "5e7244714b3e98bb4c9d1019"
      },
      {
        "id_com": "5e724471fe72e54469f4056f"
      }
    ]
  },
  {
    "id_post": "5e724471e85578b306d3ac22",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Ea id anim ut officia laboris eiusmod ut esse commodo. Veniam ex eu eiusmod veniam reprehenderit tempor. Veniam tempor do deserunt velit reprehenderit eiusmod anim consectetur magna aliquip sit incididunt do. Reprehenderit laborum labore sit ea do ut officia esse.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e7244719ff03aa883fd9a15"
      },
      {
        "id_com": "5e724471b7134c38c785bfa9"
      },
      {
        "id_com": "5e724471c8cbed0593f4b564"
      }
    ]
  },
  {
    "id_post": "5e724471203ba2916d94b888",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Aliqua deserunt irure occaecat amet cupidatat commodo aute elit consectetur mollit mollit cupidatat deserunt sit. Laboris incididunt reprehenderit minim do cupidatat dolor est id ex reprehenderit pariatur commodo consequat. Dolor do dolor commodo consequat.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e724471355d4052cb6cec12"
      },
      {
        "id_com": "5e7244714512019aa1e8f9a4"
      },
      {
        "id_com": "5e724471ffb10132267e75ed"
      }
    ]
  },
  {
    "id_post": "5e72447176a1d26a9f20c9f8",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Ullamco et in pariatur dolor ullamco irure aute. Ipsum quis ut Lorem do deserunt magna eu duis sunt. Est est duis exercitation Lorem. Anim anim labore do ut veniam. Amet irure duis Lorem voluptate nulla qui quis enim culpa anim. Incididunt laboris ex qui sit ipsum.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e724471f6089645b1f054fa"
      },
      {
        "id_com": "5e72447168fd8af18cb101f9"
      },
      {
        "id_com": "5e7244715326a4cf2387447d"
      }
    ]
  },
  {
    "id_post": "5e72447170c2bc4cc52f0a32",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Ex cillum sint eu elit duis nisi et anim amet cupidatat elit. Aute aute pariatur nostrud ullamco non et aute et duis aute voluptate culpa incididunt. Nulla cillum deserunt elit quis dolor ad tempor consequat minim pariatur qui cupidatat tempor. Dolore officia id commodo id adipisicing nostrud voluptate culpa dolore nisi. Sint nulla incididunt magna veniam tempor adipisicing nisi eiusmod. Sint ut sint ullamco quis.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e7244714b20ffa25e312e7d"
      },
      {
        "id_com": "5e724471db6de64fa8a72d54"
      },
      {
        "id_com": "5e7244710af04870f4685c25"
      }
    ]
  },
  {
    "id_post": "5e724471404affd4b9bfafdb",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Culpa est labore sunt voluptate ex elit proident ullamco. Duis eu voluptate nostrud dolor magna qui enim cillum eiusmod mollit. Labore nulla eiusmod veniam esse magna voluptate id nisi. Deserunt Lorem in non consectetur sunt eiusmod esse velit voluptate dolore labore officia ut.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e724471fb6fb55f2bdbf0c3"
      },
      {
        "id_com": "5e7244719059aa260d4723df"
      },
      {
        "id_com": "5e7244711e2a218ed62d2904"
      }
    ]
  },
  {
    "id_post": "5e724471405b63b955d720cd",
    "avatar": "http://placehold.it/32x32",
    "author": "some author",
    "date": 21313,
    "time": 12313,
    "text": "Nostrud sint Lorem veniam mollit aliquip esse pariatur non esse qui non. Cupidatat officia id elit cupidatat consectetur laboris voluptate dolor est culpa ut labore id sit. Aliqua laboris anim anim ea ad mollit ad. Eiusmod velit tempor eu ea.\r\n",
    "photos": "http://placehold.it/32x32",
    "likes": 10,
    "dislikes": 20,
    "comments": [
      {
        "id_com": "5e7244715683af1be2f11d2f"
      },
      {
        "id_com": "5e7244711984c1bf713c73d1"
      },
      {
        "id_com": "5e724471b432186b1071817a"
      }
    ]
  }
];
const obj = JSON.parse('[{ "name":"John", "age":30, "city":"New York"},{ "name":"John", "age":30, "city":"New York"}]');

// console.log(tmpJson1);
// console.log(obj);
// console.log(JSON.stringify(obj));
// console.log(JSON.stringify(tmpJson1));
// console.log(JSON.parse(JSON.stringify(tmpJson1)));
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="news">
        <Post
          idPost=""
          classN=""
          img=""
          author=""
          date=""
          time=""
          text=""
          idPhotos=""
          />
      </div>
    )
  }
}

export default News;
