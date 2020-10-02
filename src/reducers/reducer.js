//import store from "../store";
import anakin from '../img/anakin_img.jpg';
import rey from '../img/rey_img.jpg';
import luke from '../img/luke_img.jpg';
import leia from '../img/leia_img.jpg';
import rey_avatar from '../img/rey_avatar.jpg';
import rey_2 from '../img/rey_img_2.jpg';
import rey_3 from '../img/rey_img_3.jpg';
import palpatine from '../img/palpatine.jpg';

const initialStore = {
existAccount:   [
    {
        photos: anakin,
        names: "Anakin Skywalker",
        nicknames: "@dart_vader",
        dates: "Feb 29",
        contents: "WTF? Who is Rey? Why she is Skywalker? Luke...?",
        images: rey,
    },{
        photos: luke,
        names: "Luke Skywalker",
        nicknames: "@defeated_sith",
        dates: "Mar 1",
        contents: "I don't know! I taught her for 1 day. Leia...?",
        images: rey_2,
    },{
        photos: leia,
        names: "Leia Skywalker",
        nicknames: "@organa",
        dates: "Mar 2",
        contents: "Luke? We were together near Ray on Tatooine. Didn't you hear what she said? Why didn't he say anything then?",
        images: rey_3,
    },{
        photos: rey_avatar,
        names: "Rey Skywalker",
        nicknames: "@last_jedi",
        dates: "Mar 5",
        contents: "Won't I introduce myself to Palpatine? He's...",
        images: palpatine,
    }
    ]
};

const reducer  = (store = initialStore, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...store,
        existAccount: [action.newPost, ...store.existAccount]
      };
    }
    default:
      return store;
  }
};

export default reducer;