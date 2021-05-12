import React from "react";
import {
  SingleActionReducer,
  AccordionReducer,
  useAccordion,
  combineReducers,
  accordionReducer,
} from "./accordion/reducers";
import Accordion from "./accordion/ui";

const items = [
  {
    title: "Piccolo",
    content: (
      <div>
        Piccolo (ピッコロ, Pikkoro) is the spawn of King Piccolo, created to get
        revenge on Goku in the wake of his death, subsequently assuming the role
        as the "evil half" of Kami.[ch. 161, 165] However, after just narrowly
        being defeated by Goku, he has to team up with him and his friends when
        opposing the invading Saiyans, including training Goku's son Gohan.[ch.
        193, 198, 205] He is later revealed to be a Namekian – a green-skinned,
        four-fingered, hairless humanoid species who created the series' titular
        Dragon Balls.[ch. 214] He dies sacrificing himself to protect Gohan
        during the fight against the Saiyan Nappa, and trains in the afterlife
        under King Kai before being wished back to life by the Namekian Dragon
        Balls.[ch. 223, 261, 293] While during the fights with Frieza and the
        Androids he maintains the partnership temporarily, and by the time of
        the Cell and Majin Buu arcs he accepts the fact they are allies.
      </div>
    ),
  },
  {
    title: "Son Gohan",
    content: (
      <div>
        Son Gohan (孫悟飯) is Goku's eldest son with Chi-Chi, who first appears
        at the age of four years.[ch. 196] He is then kidnapped by Goku's
        brother, Raditz, and locked up in a space pod. However, his temper
        flares and he bursts out of the space pod, dealing a blow to Raditz, but
        also knocking himself out. After the battle, Piccolo takes and trains
        him for a year as he realizes Gohan's potential.[ch. 205] Gohan slowly
        becomes one of the strongest characters in the series, at one point
        holding his own against Frieza and eventually defeats Cell. During the
        Majin Buu arc he forms a relationship with Videl, with whom he later has
        a daughter named Pan.
      </div>
    ),
  },
  {
    title: "Son Goku",
    content: (
      <div>
        First introduced as a young boy, Son Goku (孫悟空, Son Gokū) is depicted
        as immensely strong, pure of heart, and extremely competitive, but
        dedicated to defending his adopted home Earth from internal or external
        threats. Though he appears human, it is later revealed during Goku's
        life that he is a member of an alien warrior race known as the Saiyans,
        and that his original name is Kakarot.
      </div>
    ),
  },
];

export const SampleAccordion = ({
  reducers = [],
}: {
  reducers?: Array<SingleActionReducer | AccordionReducer>;
}) => {
  const { openIndexes, toggleIndex } = useAccordion({
    reducer: combineReducers(...reducers, accordionReducer),
  });

  return (
    <Accordion.Container>
      {items.map((item, index) => (
        //Do not use key as index in production
        <Accordion.Item key={index} > 
          <Accordion.Title onClick={() => toggleIndex(index)}>
            {item.title}
            <span>{openIndexes.includes(index) ? '👇' : '👈'}</span>
          </Accordion.Title>
          <Accordion.Content isOpen={openIndexes.includes(index)}>
            {item.content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Container>
  );
};
