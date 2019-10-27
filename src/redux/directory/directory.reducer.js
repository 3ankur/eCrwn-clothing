import womens from "../../images/womens.png";
import men from "../../images/men.png";
import hats from "../../images/hats.png";
import jackets from "../../images/jackets.png";
import sneakers from "../../images/sneakers.png";
const initialValue = {
    sections:[
        {
          title: 'hats',
          imageUrl: hats,
          id: 1,
          linkUrl: 'hat'//shop/hats
        },
        {
          title: 'jackets',
          imageUrl: jackets,
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: sneakers,
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: womens,
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: men,
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
  }


const directoryReducer =  (state=initialValue,action) =>{

        switch (action.type) {
            default:
                return state;
        }
}

export default directoryReducer;