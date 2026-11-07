// CONTENT LAYER — HUM 101 Semi-Final Coverage
// Replace src/data/content.ts with this file (and src/lib/quiz.ts with the matching quiz.ts).
export interface Card{id:string;topic:string;term:string;front:string;back:string;alt?:string[];opts?:string[];only?:'mc'|'id'|'tf';tf?:boolean;why?:string}
export interface Topic{id:string;subject:string;title:string;intro:string;remember:string;level:string;note?:string;meta?:string}

const S='HUM 101 · Semi-Final'
export const topics:Topic[]=[
{id:'tf',subject:S,title:'Soulmaking: True or False',level:'Medium',
 intro:'The 15 True or False statements about the major points of Soulmaking.',
 remember:'Soulmaking = an alternative venue for knowing OURSELVES and the real meaning of our everyday life. It develops the artist in us, uses imagination actively, can be innate or learned, has no time reference, and needs no professional artist. Watch out for “not” and “others” that flip the meaning.',
 note:'Your file has no answer key, so the answers are inferred from the Soulmaking definition. Items 1 and 10 are the least certain, so confirm them with your instructor.'},
{id:'phases',subject:S,title:'The Phases of Soul Making',level:'Medium',
 intro:'The five “S” phases: Seeking, Settling, Surrender, Soulmaking and Soaring.',
 remember:'Seeking (first phase) → Settling → Surrender → Soulmaking → Soaring. Seeking = looking for a discipline to make sense of the world. Surrender = accepting wounds, living in the darkness. Soulmaking = becoming an injured healer.'},
{id:'crafts',subject:S,title:'Crafting & Improvisation',level:'Easy',
 intro:'Crafting images, stories, instruments, movements and techniques, plus improvisation.',
 remember:'Images = visual representations. Stories = personal feedback, values, feelings. Instruments = a bridge to the unknown (sounds). Movements = life’s rhythms. Techniques = the artist’s life experiences. Improvisation = unplanned, spontaneous.'},
{id:'davinci',subject:S,title:'Leonardo da Vinci & the Seven Principles',level:'Hard',
 intro:'Da Vinci as the ultimate Renaissance man, and the seven principles from “How To Think Like Leonardo da Vinci”.',
 remember:'Curiosita (questions) · Dimostrazione (test through experience, esp. sight) · Sensazione (refine the senses) · Sfumato (embrace ambiguity) · Arte/Scienza (science + art balance) · Corporalita (grace, fitness) · Connesione (everything is connected).',
 note:'Your file spells the author as “Michael Belb”. The author of that book is usually written Michael J. Gelb. The file’s spelling is kept, and either spelling is accepted when typing.'},
{id:'approp',subject:S,title:'Appropriation, Originality & Copyright',level:'Hard',
 intro:'Appropriation, originality, copyright, moral right, and the rights of attribution and integrity.',
 remember:'Copyright protects work from being copied without consent. Moral right: the artist can stop alterations that damage their integrity, even after a sale. Attribution = be identified as creator. Integrity = prevent derogatory treatment.'},
{id:'cultural',subject:S,title:'Cultural Appropriation & Its Forms',level:'Hard',
 intro:'Cultural appropriation vs appreciation vs denigration, and the types of appropriation.',
 remember:'Appreciation = respectful borrowing. Denigration = borrowing to humiliate. Types: object/material (tangible), non-material (stories, music), stylistic, subject, motif.',
 note:'In your file, Object appropriation and Material appropriation have almost the same definition. When typing the answer, either name is accepted for both.'},
{id:'textile',subject:S,title:'Textile Art',level:'Easy',
 intro:'Textile art and its forms: rugs, quilts, clothing, sewing, weaving, knitting and embroidery.',
 remember:'Weaving = two sets of yarns interlaced at right angles. Knitting = manipulating yarn. Sewing = stitches with needle and thread (Paleolithic era). Embroidery = decorating fabric with thread.'},
{id:'phtex',subject:S,title:'Philippine Textiles: T’nalak, Dagmay & Pis-yabit',level:'Hard',
 intro:'T’nalak of the T’boli, its three stages, Dagmay of the Mandaya, and the Tausog Pis-yabit.',
 remember:'T’nalak: Kedungon (fibre prep from abaca) → Temogo (ikat dyeing with beeswax and natural pigments) → Semaki (burnishing with a cowrie shell). Fu Dalu guides the weaving. Dagmay = Mandaya, mud-dyed abaca. Pis-yabit = Tausog head-cloth.'}]

const clue=(topic:string,rows:[string,string][]):Card[]=>rows.map(([back,front],i)=>({id:topic+i,topic,term:back,front,back}))
const idc=(topic:string,rows:[string,string][]):Card[]=>clue(topic,rows).map(c=>({...c,only:'id' as const}))
const withAlt=(cs:Card[],alts:Record<string,string[]>):Card[]=>cs.map(c=>alts[c.back]?{...c,alt:alts[c.back]}:c)

const P='One of the major points in Soulmaking, '
const tfRows:[string,boolean,string][]=[
[P+'is an alternative venue for knowing others and looking at what they are doing in everyday life.',false,'Soulmaking is an alternative venue for knowing OURSELVES and looking into the depths and real meaning of what we are doing in everyday life.'],
[P+'is a form of crafting stories or transforming brief moments into images and symbols.',true,'Soulmaking is a form of crafting stories or transforming brief moments into images and symbols.'],
[P+'is connecting with people, understanding culture, and embodying tolerance and peace.',true,'Soulmaking means connecting with people, understanding culture, and embodying tolerance and peace.'],
[P+'is not to develop the artist in us.',false,'Soulmaking is meant to develop the artist in us.'],
[P+'is that it opens the door for multiple intelligences of expression.',true,'Soulmaking opens the door for multiple intelligences of expression.'],
[P+'is not an exploration and not an application of the imagination in an active way.',false,'Soulmaking is an exploration and an application of the imagination in an active way.'],
[P+'is that an artist or artisan or even the ordinary person utilizes imagination to survive and live.',true,'An artist, artisan or even the ordinary person utilizes imagination to survive and live.'],
[P+'is that imagination is an important tool not to develop an artwork.',false,'Imagination is an important tool to develop an artwork.'],
[P+'is that it takes a special skill to hold an image in thought and turn that imagination into art.',true,'It takes a special skill to hold an image in thought and turn that imagination into art.'],
[P+'is that imagination is not always dependent on the action and plays a major role in art production.',true,'Imagination is not always dependent on the action and plays a major role in art production. (Least certain item. Confirm with your instructor.)'],
[P+'is that it can be an innate gift or a learned skill, or a combination of both.',true,'Soulmaking can be an innate gift, a learned skill, or a combination of both.'],
[P+'is that it requires a professional artist or artisan to be involved.',false,'It does not require a professional artist or artisan to be involved.'],
[P+'is that it has no time reference, it occurs anytime.',true,'Soulmaking has no time reference; it occurs anytime.'],
[P+'is that it occurs where there is engagement among the person, time, and space.',true,'Soulmaking occurs where there is engagement among the person, time and space.'],
[P+'is that it does not vary from each individual with diverse experiences based on what is obtained through the senses.',false,'Soulmaking varies from each individual with diverse experiences, based on what is obtained through the senses.']]
const tf:Card[]=tfRows.map(([front,v,why],i)=>({id:'tf'+i,topic:'tf',term:v?'True':'False',front,back:v?'True':'False',tf:v,only:'tf' as const,why}))

const phases=withAlt(idc('phases',[
['Seeking','The first phase of Soul Making: “We are looking for a discipline or method that can help us live in and make sense of the world and heal the wounds of self.”'],
['Settling','The phase about communicating as profoundly as possible with the soul, with other persons, with non-human beings and with the world.'],
['Surrender','The phase that takes us up and throws us down, calls for the wounds we bear to be accepted, and forces us to spend time living in the darkness.'],
['Soulmaking','The phase in which we are beginning to become an expert, an injured healer.'],
['Soaring','The phase described by: “When we begin our journey, what we most wish is to ________.”']]),{'Soaring':['Soar']})
const crafts=idc('crafts',[
['Crafting images','Includes the production, by various forms and methods, of visual representations of images.'],
['Crafting stories','The person writes down personal feedback like life values, deep feelings, ideas, ideals, and even high and low emotions.'],
['Crafting instruments','A bridge to the unknown because it creates sounds that exceed our thoughts, emotions and sensations.'],
['Crafting movements','The form of crafting based on the idea that life is full of different rhythms.'],
['Crafting techniques','The artist’s reflection of his life experiences in any piece of art.'],
['Improvisation','The activity of making or doing something not planned beforehand, using whatever can be found; in the performing arts, a very spontaneous performance without specific or scripted preparation.']])
const davinci=withAlt(clue('davinci',[
['Leonardo da Vinci','The ultimate Renaissance man: an accomplished scientist, mathematician, engineer, inventor, anatomist, painter, sculptor, architect, musician and writer.'],
['Michael Belb','He introduces his book entitled “How To Think Like Leonardo da Vinci: 7 Steps to Genius Every Day.”'],
['Seven','The book “How To Think Like Leonardo da Vinci” gives ________ steps to genius every day.'],
['Soulmaking','An alternative venue for knowing ourselves and looking into the depths and real meaning of what we are doing for our everyday life.'],
['Curiosita','Great minds have one characteristic in common: they continuously ask questions throughout their lives.'],
['Dimostrazione','A commitment to test knowledge through experience.'],
['Sensazione','The continual refinement of the senses, especially sight, as the means to clarify experience.'],
['Sight','According to da Vinci, we can best practice Dimostrazione through our senses, particularly ________.'],
['Sfumato','A willingness to embrace ambiguity, paradox and uncertainty; the ability to handle a sense of mystery.'],
['Arte/Scienza','The development of the balance between science and art, logic and imagination (“whole-brain thinking”).'],
['Corporalita','The cultivation of grace, ambidexterity, fitness and poise.'],
['Connesione','A recognition and appreciation for the connectedness of all things and phenomena; “systems thinking.”']]),
{'Michael Belb':['Michael Gelb','Michael J. Gelb','Gelb'],'Seven':['7']})
const approp=clue('approp',[
['Appropriation','The use of borrowed elements in the creation of new work; may include images, forms or styles from art history or popular culture, or materials and techniques from non-art contexts.'],
['Originality','An artist’s own work which has stemmed from their individual, creative and innovative mind.'],
['Copyright','The legal right of an artist which protects their work from being copied or plagiarized without consent.'],
['Moral right','Even if an artist sells the artwork, whether or not the copyright has been passed down, artists can still prevent their work from being altered in a way that may damage their integrity.'],
['Appropriation of subject','Taking the subject and composition but changing the style of an art.'],
['Copyright Act of 1968','Prohibits anyone from copying or recreating the work of another artist without permission or consent.'],
['The right of attribution','The right to be identified as the original creator of the work.'],
['The right of integrity','The right to prevent work from being treated in a derogatory manner.'],
['Appropriationism','Reflects the overproduction of reproductions, remakings, reenactments, recreations and reconstructings by copying, imitating, repeating, quoting, plagiarizing, simulating and adapting pre-existing names, concepts and forms.']])
const cultural=withAlt(clue('cultural',[
['Cultural appropriation','The adoption of an element or elements of one culture or identity by members of another culture or identity.'],
['Cultural denigration','When someone adopts an element of a culture with the sole purpose of humiliating or putting down people of that culture.'],
['Cultural appreciation','The respectful borrowing of elements from another culture with an interest in sharing ideas and diversifying oneself.'],
['Object appropriation','Occurs when the possession of a tangible work of art (such as a sculpture or a painting) is transferred from members of one culture to members of another culture.'],
['Material appropriation','Occurs when the possession of a tangible object (such as a sculpture) is transferred from members of one culture to members of another culture.'],
['Non-material appropriation','The reproduction, by a member of one culture, of non-tangible works of art (such as stories, musical compositions or dramatic works) produced by some other culture.'],
['Stylistic appropriation','Artists do not reproduce works produced by another culture, but still take something from that culture.'],
['Subject appropriation','Occurs when someone from one culture represents members or aspects of another culture.'],
['Motif appropriation','Artists are influenced by the art of a culture other than their own without creating works in the same style.']]).map(c=>/^(Object|Material) appropriation$/.test(c.back)?{...c,only:'id' as const}:c),
{'Object appropriation':['Material appropriation'],'Material appropriation':['Object appropriation']})
const textile=clue('textile',[
['Textile art','A process of creating something using fiber gained from sources like plants, animals, insects or synthetic materials.'],
['Rugs','A floor covering of thick woven material or animal skin, typically not extending over the entire floor.'],
['Quilts','A warm bed covering made of padding enclosed between layers of fabric and kept in place by lines of stitching, typically applied in a decorative design.'],
['Clothing','Items worn on the body; typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together.'],
['Sewing','The craft of fastening or attaching objects using stitches made with a needle and thread; one of the oldest textile arts.'],
['Paleolithic era','Sewing, one of the oldest textile arts, arose in this era.'],
['Weaving','A traditional method of textile production in which two distinct sets of yarns or threads are interlaced at right angles to form a fabric or cloth.'],
['Knitting','A traditional method by which yarn is manipulated to create a textile or fabric; used in many types of garments.'],
['Embroidery','The craft of decorating fabric or other materials using a needle to apply thread or yarn; may also incorporate pearls, beads, quills and sequins.']])
const phtex=withAlt(clue('phtex',[
["T'nalak",'A sacred cloth woven by the T’boli people in communities around Lake Sebu, Mindanao island.'],
["T'boli",'The people who weave the sacred T’nalak cloth around Lake Sebu.'],
['Lake Sebu','The place in Mindanao around which the T’boli communities weave T’nalak.'],
['Fu Dalu','A spiritual guardian who guides T’nalak weaving, a process enriched with taboo and ritual.'],
['Kedungon','The fibres used in weaving T’nalak are harvested from the abaca tree and prepared in a process known as ________.'],
['Abaca','The tree whose fibres are used to weave T’nalak and Dagmay.'],
['Temogo','________, or dyeing, is done in the ikat style using beeswax and natural pigments.'],
['Semaki','The final stage in making T’nalak, called ________, involves burnishing the fabric with a heated cowrie shell; nut oil is used to condition it and add sheen.'],
['Cowrie shell','In Semaki, the T’nalak fabric is burnished with a ________ that is heated by friction.'],
['Dagmay','A handwoven textile made from abaca; making it involves a mud-dyeing technique where tannin-dyed yarns are soaked in iron-rich mud for days.'],
['Mandaya','The ________ women weave the fiber into intricate figures and patterns as a Dagmay becomes a finished product, depicting their folklore and beliefs.'],
['Pis-yabit','A Tausog woven head-cloth made from cotton or silk, with intricate geometric patterns of colors segmented into the smallest squares, triangles and diamonds.'],
['Tausog','The people who make the Pis-yabit head-cloth.']]),
{"T'nalak":['Tnalak'],"T'boli":['Tboli']})

export const cards:Card[]=[...tf,...phases,...crafts,...davinci,...approp,...cultural,...textile,...phtex]
