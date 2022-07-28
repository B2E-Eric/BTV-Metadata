// ERC-20 Token assets, file would also be used to create NFT types on contract deployment.
// {
//     address: string, // Address of the ERC-20 Token contract
//     type: number, // TypeId, index of createType() call
//     name: string,
//     description: string,
//     history: string,
//     category: string, // "Rank", "Avatar"...
//     subCategory: string, // "Vunhuma", "Hignos"...
//     img: "skin1" // Image path is composed of /{category}/{img}.png
// }

const assets = [
  {
    address: "0xaFab5455948b260e17214D289B6259513e3D4509",
    creation: 1487779602,
    type: 1,
    name: "Golden Excalibur",
    description:
      "Forged in the depths of the planet Glavos, Excalibur is the jewel of the Trexar fleet. Its steep lines and colossal firepower are the pride of the Archbaron, who has entrusted his confidant with the mission of leading it into battle.",
    category: "skin",
    img: "Golden Excalibur",
    rarity: "common"
  },
  {
    address: "0x899c6dEe157592794ac79D4767D47aC7A0563d9D",
    creation: 1487779602,
    type: 2,
    name: "Ship Pilot",
    description:
      "The pilot's job comes with a great deal of prestige, it requires one to be extremely talented or lucky enough to own a spaceship.\nPilots are the core of every fleet but their numbers are few as only a handful are good enough to obtain the title.",
    history:
      "This rank was awarded during crowdfunding for every 1,000 Nexium purchased",
    category: "rank",
    img: "Ship Pilot",
    rarity: "common"
  },
  {
    address: "0x097F659E579b4A5176fbcD4A6AD331A240BE34af",
    creation: 1487779613,
    type: 3,
    name: "Fleet Captain",
    description:
      "Fleet Captains have been given their position for acts of great valor and ability to command the Pilots. \nWhile there is no official hierarchy between the Fleet Captains they live by a code where the bigger fleet is in charge. The huge destruction power of those fleets also places a great burden on the Commanders as they are responsible for the lives of the Pilots as well as the Citizens.",
    history:
      "This rank was awarded during crowdfunding for every 4,000 Nexium purchased",
    category: "rank",
    img: "Fleet Captain",
    rarity: "common"
  },
  {
    address: "0x01B8b44bC79266FeBb2d359731176a54c9Db93F1",
    creation: 1487779613,
    type: 4,
    name: "Death Star Commander",
    description:
      "Death Stars are moving fortresses that serve as mobile stations for the Pilots and warships. Legends say they are powerful enough to turn entire planets into rubble.",
    history:
      "This rank was awarded during crowdfunding for every 16,000 Nexium purchased",
    category: "rank",
    img: "Death Star Commander",
    rarity: "common"
  },
  {
    address: "0x1afC72E5d599c159550D056eEf27F59C60F68370",
    creation: 1487779713,
    type: 5,
    name: "Army General",
    description:
      "Army Generals command the Fleets and all the forces in space. To further augment their ability to lead and command they receive guidance from an AI. Army Generals are some of the most influential individuals in the universe.",
    history:
      "This rank was awarded during crowdfunding for every 50,000 Nexium purchased",
    category: "rank",
    img: "Army General",
    rarity: "common"
  },
  {
    address: "0x560d4C1A582F479C37E59F88F95b66B2DC14c95E",
    creation: 1487779714,
    type: 6,
    name: "Moon Administrator",
    description:
      "Moons are rare but contain vast amounts of precious resources. The conditions are harsh for the colonists but the rewards well worth it.The Moon Administrator oversees the day to day activities on the moon and the exploitation of the precious resources.",
    history:
      "This rank was awarded during crowdfunding for every 100,000 Nexium purchased",
    category: "rank",
    img: "Moon Administrator",
    rarity: "common"
  },
  {
    address: "0x4eFBa44206005b2fd00041642Bdc956703696E7f",
    creation: 1487779714,
    type: 7,
    name: "Planetary Regent",
    description:
      "“Regent” is a generic word used to describe the person leading an inhabited planet. Depending on the culture, the activities and the localization of the planet in the galaxy, this generic word may change. Some Regents were elected, while others came to power through war or by the favor of wealthy individuals. They are responsible for organizing the daily life and the future of billions of individuals. Only the most capable will ever have a chance of becoming a “Regent”.",
    history:
      "This rank was awarded during crowdfunding for every 400,000 Nexium purchased",
    category: "rank",
    img: "Planetary Regent",
    rarity: "common"
  },
  {
    address: "0xF8D18cCBb70971d292139eb407c047ad93682949",
    creation: 1487779735,
    type: 8,
    name: "Star Baron",
    description:
      "Star Barons lead and influence entire star systems. They are the ones who guide the people into the future through politics and important decisions. While ownership of an individual is prohibited under the law of the Empire you could still say the Star Barons control every citizen in their space. The job of the Star Baron is to bargain trade agreements, to ensure that their systems are well supplied, and decide which planet will be exploited for resources next. In exchange they take a substantial part of the value coming from the flow of capital inside their worlds.",
    history:
      "This rank was awarded during crowdfunding for every 650,000 Nexium purchased",
    category: "rank",
    img: "Star Baron",
    rarity: "common"
  },
  {
    address: "0x5Ab278585A14027bd79452f0b1693B99A5b0cc80",
    creation: 1487779735,
    type: 9,
    name: "Constellation King",
    description:
      "Constellation Kings are responsible for only the most important of matters. They decide where to expand and what star systems to colonize next. While called kings they are usually organizations or groups of people with very high morals and extreme foresight.",
    history:
      "This rank was awarded during crowdfunding for every 1,000,000 Nexium purchased",
    category: "rank",
    img: "Constellation King",
    rarity: "common"
  },
  {
    address: "0xd08143f7e3E0a39Ac1573ac6E6e8c9b49A8396A6",
    creation: 1487779769,
    type: 10,
    name: "Galactic Emperor",
    description:
      "We know very little about emperors. Some of them have connections to House Xoletsa which they seem to use as advisers.",
    history:
      "This rank was awarded during crowdfunding for every 1,700,000 Nexium purchased",
    category: "rank",
    img: "Galactic Emperor",
    rarity: "common"
  },
  {
    address: "0x42eBfE454e9f1912cd85471656743e051b129497",
    creation: 1487779769,
    type: 11,
    name: "Aetherlith",
    description: "Living stone in Outer Space.",
    category: "event",
    img: "Aetherlith",
    rarity: "common"
  },
  {
    address: "0xBe1bE4B6eAC09203C7c901d6413CeCc65A378BA0",
    creation: 1487779771,
    type: 12,
    name: "Tactician pack",
    description: "",
    category: "consumable",
    img: "Tactician pack",
    rarity: "common"
  },
  {
    address: "0x0fE759fdcAe4bAa50b09AC367B65e7283F42eb78",
    creation: 1489668465,
    type: 13,
    name: "Green Sun",
    description: "",
    category: "event",
    img: "Green Sun",
    rarity: "common"
  },
  {
    address: "0x780ef87E43Be713EA44E1C9EafC22C6baC19e0E5",
    creation: 1489668598,
    type: 14,
    name: "Starter pack",
    description: "",
    category: "consumable",
    img: "Starter pack",
    rarity: "common"
  },
  {
    address: "0x237E8a85D45f6Af8aAb8cA26fB801Ff4C578A503",
    creation: 1515609353,
    type: 15,
    name: "Junkalibur",
    description: "description vide",
    category: "skin",
    img: "Junkalibur",
    rarity: "common"
  },
  {
    address: "0xEEf23786c06b29F99A4Fd4A60A7e7e8F41214877",
    creation: 1515609415,
    type: 16,
    name: "Wall Of Steam",
    description: "description vide",
    category: "skin",
    img: "Wall Of Steam",
    rarity: "common"
  },
  {
    address: "0x3055a809d574F85acD1fe3c693f01423eF94212b",
    creation: 1515609467,
    type: 17,
    name: "Molten Core Fusion",
    description: "description vide",
    category: "skin",
    img: "Molten Core Fusion",
    rarity: "common"
  },
  {
    address: "0xa57414A5B6C2f98e825acc3944cC1FEfcD85699F",
    creation: 1515609528,
    type: 18,
    name: "Augustina Steinbach",
    description:
      "Admiral Augustina Steinbach is renowned throughout House Trexar for her strategic cunning, steely resolve, loyalty to her troops, and her impeccable taste in cigars.",
    category: "avatar",
    img: "Augustina Steinbach",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x12D90E6c0A30590eca4B05abe16f16e604cFD12b",
    creation: 1515609572,
    type: 19,
    name: "Ogunu",
    description:
      "Ogunu comes from a diplomatic family of metal and prestige. His fierce conquests are only outshone by his craftsmanship.",
    category: "avatar",
    img: "Ogunu",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0xae2907585e27bAE76b916f59293deAd353fd2581",
    creation: 1515609762,
    type: 20,
    name: "Itztli",
    description:
      "Itztli walks the line between zealot and sadist. He fights with a righteous fury that has earned him due amounts of fear and respect. Nothing brings him more pleasure than conquering his enemies as tribute to his gods.",
    category: "avatar",
    img: "Itztli",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x81D51f3f548f4f323Ea6B51341192dC2d9683b18",
    creation: 1515609773,
    type: 21,
    name: "Geser Khagan",
    description:
      "Geser is a fierce champion for his people. Seen as fearless with a thirst for battle, soldiers like him are the reason for House Visgalt’s reputation as conquerors among the stars.",
    category: "avatar",
    img: "Geser Khagan",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x8f06B5D8b9cce6F398C95E55935E6f00EE61F4EE",
    creation: 1515609807,
    type: 22,
    name: "Itelsut",
    description:
      "Itelsut enjoys the thrill of battle as much as the musings of philosophers. Raised within a proud and noble house, she received education and military training in equal measure. Don’t let her even-temperedness and quick wit fool you.",
    category: "avatar",
    img: "Itelsut",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0x9E102397C90a212644313A9121c22c4EFF61A3d4",
    creation: 1518601701,
    type: 23,
    name: "Enamored Advisor",
    description: "",
    category: "event",
    img: "Enamored Advisor",
    rarity: "common"
  },
  {
    address: "0x3d6fe205a85808fE6a736F45aF54425a44399009",
    creation: 1538037252,
    type: 24,
    name: "Ready Ether One - BGS2018",
    description: "description vide",
    category: "skin",
    img: "Ready Ether One",
    rarity: "common"
  },
  {
    address: "0x386c923D4ba086042BbAE407aC163c5a0ceE8a28",
    creation: 1538642995,
    type: 25,
    name: "Hellspawn",
    description: "",
    category: "skin",
    img: "Hellspawn",
    rarity: "common"
  },
  {
    address: "0xC30900B96E16A35840Ed52166b015C705F8746F8",
    creation: 1542798178,
    type: 26,
    name: "Emerald Fusion",
    description: "",
    category: "skin",
    img: "Emerald Fusion",
    rarity: "common"
  },
  {
    address: "0x3CbD83131e7d1d673a452C8257B0e832dD71F93C",
    creation: 1542984092,
    type: 27,
    name: "Paria",
    description: "Operating under the moniker of Makelarr, Paria’s identity is known only to a select few in the Baron’s inner circle. To the outside world, the Makelarr is a broker who deals in information and sells to the highest bidder. In reality, Paria buys and sells with only the Baron’s interests in mind. The information chess game she plays relies on spreading conflicting information to each of the other Houses to better position House Hignös for galactic supremacy.",
    category: "avatar",
    img: "Paria",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0xcEb25Adf5B954153295efCA18931DAf3947DD472",
    creation: 1542984201,
    type: 28,
    name: "Aryalia",
    description: "Trained as a historian and archivist, Aryalia found an interest in studying the mystery of the great cataclysm. The calamitous event simultaneously created and separated the great Houses, isolating Xoletsa at the edges of the galaxy. Her studies have brought her no closer to the source of this disaster, but she has discovered that the event caused a fundamentally change in the physiology of Xoletsian people and can, perhaps, explain their penchant for the supernatural.",
    category: "avatar",
    img: "Aryalia",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x1604450b3fB8B87Eb7C22fc8e7288Fc4b7a019Bf",
    creation: 1542984343,
    type: 29,
    name: "Ifuna Sharr",
    description:
      "A spy and saboteur in service of the Trexar barony, Ilverna has a sizable bounty on her head in Visgalt, Vunhuma, and Hignös territories. Reassigned to Trexar operations in the Void, she brings her many years of spycraft to ensuring her house’s dominance in this new frontier.",
    category: "avatar",
    img: "Ifuna Sharr",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x8fE781aD4707178D600890dAA0d4DE1c9831DCd7",
    creation: 1542985041,
    type: 30,
    name: "Yugahn Zeligg",
    description:
      "With the birth of Archbaron Visgalt’s monstrous sons, self-mutilation became a mark of loyalty among the House’s servants. Zeligg was among the first to volunteer for such “cosmetic” surgery. With his fanatic devotion to his house coupled with his new, death-like visage, he has gained a fearsome reputation on the battlefield.",
    category: "avatar",
    img: "Yugahn Zeligg",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0xF1D00E485e4A890Dba8C129f5364e2d2D1B07A1a",
    creation: 1542985657,
    type: 31,
    name: "Fungus Lord",
    description: "",
    category: "skin",
    img: "Fungus Lord",
    rarity: "common"
  },
  {
    address: "0xFD7fC9Bc7B600002a7eF8D511ab4B935e9De36A1",
    creation: 1542986094,
    type: 32,
    name: "Bloody-K2",
    description: "",
    category: "skin",
    img: "Bloody-K2",
    rarity: "common"
  },
  {
    address: "0xC7f0e87b3603d401Fd206D3DF84B4A686986395a",
    creation: 1542986776,
    type: 33,
    name: "Cyanide Karkass",
    description: "",
    category: "skin",
    img: "Cyanide Karkass",
    rarity: "common"
  },
  {
    address: "0x07EFdb396158687BED7805702C71BDC2Dca15758",
    creation: 1542986810,
    type: 34,
    name: "Wataida",
    description:
      "Wataida works tirelessly toward balance between her society and its surrounding nature. By designing transportation and habitats that resemble nature and work with the forces of the planet, she hopes to leave lasting impact. The near overflow of ambrosium has allowed her to construct the most efficient and harmonious infrastructure of all the houses.",
    category: "avatar",
    img: "Wataida",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x980F27180A39C10933BaA3Ee90D02508E9E1Bcd5",
    creation: 1542986810,
    type: 35,
    name: "Setonn",
    description:
      "With oceans surrounding everything, understanding how to exploit this abundant resource fell to the desk of Setonn. Being learned in marine biology and molecular engineering, he put his personal stamp on the surrounding environment. By creating a menagerie of machine/animal hybrids, Setonn ensured that the world itself would work toward the Baron’s wishes.",
    category: "avatar",
    img: "Setonn",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0x6cC8B96299DA4105AA5172D4124e21545056BC7b",
    creation: 1542987933,
    type: 36,
    name: "Chuma",
    description:
      "With most of the unmined Ambrosium located in the Void, the study of this mysterious realm fell to seers like Chuma. He used his mastery over the ancient machines to extract secrets from the darkest corners of the Void.",
    category: "avatar",
    img: "Chuma",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x19a71fE3b212aec360d9460f8EeD8385575aEa3a",
    creation: 1542987933,
    type: 37,
    name: "Maomba The Unflinching",
    description: "Maomba ventured into the Void and earned his nickname in earnest. Stalwart in his mission, he is the sword of Vunhuma that strikes out into the darkness and teaches the unknown what fear feels like.",
    category: "avatar",
    img: "Maomba The Unflinching",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x513C6a41D745B432eDa445C2b40361b188EC583A",
    creation: 1542988594,
    type: 38,
    name: "Just Blue",
    description: "",
    category: "skin",
    img: "Just Blue",
    rarity: "common"
  },
  {
    address: "0x5ff96cDC1BaEA97744ebD9F24114927280102D4b",
    creation: 1542988656,
    type: 39,
    name: "Dr. Arvid Styrke",
    description: "Dismissed as a “mad scientist” by some, Dr. Styrke has nonetheless been responsible for some of the Trexar barony’s greatest advancements in ambrosium-based technology. A military veteran as well as a man of science, Dr. Styrke quickly volunteered for Trexar’s Void Expansion forces to further his study of ambrosium.",
    category: "avatar",
    img: "Dr Arvid Styrke",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x2C0C0307a05aFAD047cE68a99AadEE5290711508",
    creation: 1542989633,
    type: 40,
    name: "Ispa Nandeth",
    description:
      "Ispa struggles through her existence, ever-devoted to bring hope to the desperate, mend the broken, and shield the tormented. Her pious zeal caught the eye of the Baroness who granted her the power to end the misery of others but did nothing to lessen her personal woe. Ever burdened, she perseveres with her divine undertaking in the hope that after all others are healed she can receive a final relief.",
    category: "avatar",
    img: "Ispa Nandeth",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0xE5C039F6cA2227F8462FC8c1dd22e6383a855109",
    creation: 1542989633,
    type: 41,
    name: "Solek Voidwalker",
    description:
      "Solek was the first to earn the title of Voidwalker. Using House Hignös astral projection technology, he can explore the Void with minimal immediate danger. However, the experience results in extreme mental and physical fatigue and degeneration. The solution is constant cybernetic enhancements to the point where many question whether Solek is sentient or just following his programing.",
    category: "avatar",
    img: "Solek Voidwalker",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0xEAc179Db44Ecf1eE59888cE3BC0Db7C14885Dbad",
    creation: 1542991929,
    type: 42,
    name: "Rakaaj Vorik",
    description:
      "For a family to gain favor within House Visgalt, it must be willing to purge any members deemed too weak to carry out the Archbaron’s will. For this reason, Rakaaj’s family nearly had him ritually killed as a child, due to a deteriorating muscular condition which required him to have mechanical assistance to walk at an early age. As his family’s only child, though, he was granted a reprieve, so long as he could prove himself worthy to House Visgalt. Rakaaj found his calling as a fighter pilot, and out among the stars he is one of the most feared of House Visgalt’s troops, disability or no.",
    category: "avatar",
    img: "Rakaaj Vorik",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0xe01ECaADd031A333E4600B9C64108421ef37d4b7",
    creation: 1542992023,
    type: 43,
    name: "Anesu Kutau",
    description:
      "The title of Kutau is bestowed upon the only living person who communicates with the Baron of Vunhuma. For Anesu, this is a lifetime position of power and responsibility. She guides House Vunhuma as much as the Baron and its success and failure also lie with her. When her days are finished, she alone chooses her successor and then joins her predecessors within the consciousness of the Baron.",
    category: "avatar",
    img: "Anesu Kutau",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0xA4E1B51bE128bD660306f30dD703AeD432e82e17",
    creation: 1542992126,
    type: 44,
    name: "Nekhir Surmann",
    description:
      "Nekhir should have died years ago. A highly decorated member of the Marauders, he became infected with an experimental virus crafted by House Hignös, causing his body began to slowly rot from the inside. He had little hope of survival, but was saved by a painful, experimental procedure performed by House Visgalt’s “Mad Doctor,” Elmin Kluvik, himself a Hignös defector. The virus has now created a symbiotic bond with Nekhir, who relishes in his new, horrific appearance.",
    category: "avatar",
    img: "Nekhir Surmann",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x513B1d1FDcf9e72a69E2721A03688173B0b22121",
    creation: 1542992157,
    type: 45,
    name: "Mharra Ezen",
    description: "Like many seeking greater favor with House Visgalt, Mharra has ritually scarred herself to make her appearance more like that of Archbaron Visgalt’s beloved sons. An ambitious intelligence officer whose family has long served the house, Mharra hopes to consolidate her power within the barony by manipulating one of the Visgalt heirs into marrying her.",
    category: "avatar",
    img: "Mharra Ezen",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x880bA6C9B81A001BA1b06Cd1EF53a2684CE0b689",
    creation: 1542992200,
    type: 46,
    name: "Nenetl Mago",
    description:
      "Nenetl Mago fashions herself a librarian of all that is worthy to be studied and revered. Her insatiable curiosity and dedication fashioned her into the singular expert on all of House Xoletsa’s various deities, rituals, and magics. She is, however, generous with her knowledge and does not seek to withhold. This has led to the revival of some magics that even those in Xoletsian society consider unnatural.",
    category: "avatar",
    img: "Nenetl Mago",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x17A8c03ac953B0bf0454976cB4b37c11eFb90a1a",
    creation: 1542992274,
    type: 47,
    name: "T'Vei",
    description:
      "T’Vei was the lead engineer for taking the Wall-K2 ship design and upgrading it to a mothership worthy of House Hignös. It was her idea to improve hull integrity allowing for the ramming of enemy ships. This enhancement permitted Hignös fighters to take down their enemies even if it was their final act.",
    category: "avatar",
    img: "T Vei",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0xA14725891BFeF57122D1454Bae6AC9A4Dfc3258C",
    creation: 1542992274,
    type: 48,
    name: "Ieshan Oltaca",
    description: "In a society full of ritual and mysticism, the Deific Order is the protector of ceremony and freedom. As head of the Order it is Ieshan Oltaca’s mission to protect people from the rituals and rituals from people. The principle of ritual autonomy leads to conflict and it is here that Ieshan must insert her authority, by force or otherwise.",
    category: "avatar",
    img: "Ieshan Oltaca",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x9BbC6b0FCe516692c2ED0C7b71d7acBEF8ca0b18",
    creation: 1542992388,
    type: 49,
    name: "Bioplasmik Zel'Hactl",
    description: "",
    category: "skin",
    img: "Bioplasmik Zel Hactl",
    rarity: "common"
  },
  {
    address: "0xFb5a51AE417E5753aEc5452Ef760915973F97C37",
    creation: 1542992407,
    type: 50,
    name: "Dalton Brecht",
    description:
      "Dalton has been chief engineer of the Trexar fleets for more than a decade, and he sees the barony’s ships the same way he does his young children - they’re loud, constantly in need of attention, and every last one is precious to him.",
    category: "avatar",
    img: "Dalton Brecht",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x6D83D5514438520e4A50B2FE096eb7992011d0A2",
    creation: 1545149576,
    type: 51,
    name: "Vesha",
    description:
      "Vesha was born with a natural disdain for anyone not within House Hignös. This resentment was useful when he became the head of the Advanced Tactical Warfare Division. His designs are inspired by his feelings toward other houses and so his metallic assassins never meets a target more than once. His victims are treated to a shared final experience demonstrating the efficient killing power of House Hignös.",
    category: "avatar",
    img: "Vesha",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0x8A2a645d8F1Bc69dA92291b8d128e391a1Aa65e7",
    creation: 1545323376,
    type: 52,
    name: "Iron Widow",
    description: "",
    category: "skin",
    img: "Iron Widow",
    rarity: "common"
  },
  {
    address: "0xa71F948Eda6167a83b8A496b8B50E956307539E6",
    type: 53,
    creation: 1654870524,
    name: "Bryn Immershild",
    description: "Captain Immershild is a highly decorated member of the Trexar barony’s elite, interplanetary police force, AEGIS. Bryn has recently been reassigned to protecting Archbaron Trexar’s personnel in the Void, and though she would rather stand guard over her home systems she will nonetheless see her new mission through to the end.",
    category: "avatar",
    img: "Bryn Immershild",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0xA6FAdf5b314CD988d692A07EA0Dc032b15D5d4CE",
    type: 54,
    creation: 1654871258,
    name: "Zurmin Hewn",
    description: "The brash and unpredictable Captain Hewn has a longstanding promise with the troops under his command - he will only ever shave his beard if he loses a battle. A razor has not touched his facial hair in a decade, and he means to keep it that way in the Void.",
    category: "avatar",
    img: "Zurmin Hewn",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x7258f41D2a27D8138A5A37C1BDfEB2B37ee03ff5",
    type: 55,
    creation: 1655381937,
    name: "Mertin Stockmore",
    description: "The only thing Mertin was terrified of was never leaving his home planet. His home world of Amaranth had never economically rebounded once its ambrosium mines started to run dry, and with job prospects dwindling Mertin’s options were to work at his father’s business or join Trexar’s military forces and explore the Void. He has not regretted his decision.",
    category: "avatar",
    img: "Mertin Stockmore",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x0e098A7DcF401987567DCF6612d3236430746963",
    type: 56,
    creation: 1655383911,
    name: "Duretta Harthorn",
    description: "Duretta’s grandmother betrayed Archbaron Trexar to House Visgalt years ago, costing her family its esteemed place in the Trexar barony and, more importantly, its honor. Duretta and her parents have worked tirelessly to rebuild their reputation, but Duretta knows it will likely be another generation before the Harthorn name is back in House Trexar’s good graces. She enlisted in the Void expedition not for herself, but in the hopes that her service will allow her children to be welcomed back into Trexar society.",
    category: "avatar",
    img: "Duretta Harthorn",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x1DfAC4543bb458C4AaE4ca89d608ee4b35DC66E0",
    type: 57,
    creation: 1655383911,
    name: "Jorg Erdunson",
    description: "Beneath his imposing Trexar regalia, Jorg is a scholar at heart. His military service has helped fund his academic career, and he hopes to be a professor of history at his military academy. Being part of Trexar’s unprecedented expedition into the Void was not an opportunity he could pass up.",
    category: "avatar",
    img: "Jorg Erdunson",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x5e60AD91ABeEd7cA62C81D949632daeff19f9f15",
    type: 58,
    creation: 1655383911,
    name: "Dr. Lumusi Gestalt",
    description: "Dr. Gestalt is a renowned military scientist who underwent an experimental procedure that enhanced her brain with cybernetic implants. She can now meld her consciousness with most ships in the Trexar fleet, making her an incredibly formidable foe on the battlefield despite her lack of first-hand military experience.",
    category: "avatar",
    img: "Dr Lumusi Gestalt",
    subCategory: "trexar",
    rarity: "common"
  },
  {
    address: "0x5e60AD91ABeEd7cA62C81D949632daeff19f9f15",
    type: 59,
    creation: 1655383911,
    name: "Mogabee",
    description: "His adherence toward harmony is only matched by his disdain toward those who seek to shatter the peace his house strives toward. After dispatching of his enemies’ forces with the power of the Fusion, them the option to join in the harmony of Vunhuma by submitting directly to him or face expulsion to the Void",
    category: "avatar",
    img: "Mogabee",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x3337da43349A78dB49eB7608128EAC2679E9Ce66",
    type: 60,
    creation: 1655801688,
    name: "Musa",
    description: "Benefitting from the excesses of ambrosium, Musa turned every transaction into profit. Coming from a long family line of traders and merchants, her methods allow Vunhuma to spare no expense probing the Void for more riches",
    category: "avatar",
    img: "Musa",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0xF0195b538D5174822dE7F861d3d6606D2d6A4415",
    type: 61,
    creation: 1655801688,
    name: "Miriro",
    description: "By valuing conflict over harmony, Miriro was destined to be an outlier in Vunhuma society. Her desire to confront local politicians head-on led to her becoming a rising star in the bureaucracy, but not without making more than a few enemies along the way.",
    category: "avatar",
    img: "Miriro",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x7ebd1299b2b83461d741c0e7Fbd4f4FfD318Ea12",
    type: 62,
    creation: 1655801688,
    name: "Mbwiri",
    description: "Mbwiri is a shaman of Vunhuma whose superb healing ability has led the masses to flood her clinics. However, her patron’s fervent, sometimes unreasonable, loyalty has led to whispers of something dark and forbidden gripping their minds.",
    category: "avatar",
    img: "Mbwiri",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0x42C4809c10546290Bb2F96b6268dAEB7c46BD5c9",
    type: 63,
    creation: 1655801688,
    name: "Hondo",
    description: "With a near omnipresence within the galactic political scene, Hondo knows everyone. He uses his connections and influence to help Vunhuma use its vast reserves of Ambrosium to push its civilization beyond the highest of its extinct predecessors.",
    category: "avatar",
    img: "Hondo",
    subCategory: "vunhuma",
    rarity: "common"
  },
  {
    address: "0xe9528ACc7481eD64A729a0FA65F5481f502CC89a",
    type: 64,
    creation: 1655806260,
    name: "Zarrakus",
    description: "As Grand Marauder for the past 30 years, Zarrakus has won numerous victories for House Visgalt, taking countless captured enemies as slaves to be bartered and sold by his Archbaron. A Grand Marauder is typically only replaced when one of his lieutenants defeats him, either through combat or trickery. The fact that Zarrakus has survived for decades speaks to how deadly and cunning he is.",
    category: "avatar",
    img: "Zarrakus",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0xDe6FbE0F1507100b0692B5054563B4EC91f17416",
    type: 65,
    creation: 1655806260,
    name: "Warden Valtoga",
    description: "Warden Valtoga is responsible for the massive Tartaros penal colony, one of House Visgalt’s earliest successful expansions outside the traditional slave trade. Tartaros has long been a lucrative business for House Visgalt due to its willingness to jail anyone, from rebels, to disloyal soldiers, to political rivals, for the right price. Warden Valtoga is a merciless jailer, who will work his captives in the mines of Tartaros until their deaths.",
    category: "avatar",
    img: "Warden Valtoga",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x7b2470d9d7f352cA28327c0D0fa697F2D5cFeFD6",
    type: 66,
    creation: 1655806260,
    name: "Revmarza Tlan",
    description: "Tlan is a Visgalt double agent, who has earned the trust of House Trexar but only so he can then send those secrets back to House Visgalt. Tlan has been operating in this role for years, and lately has had a harder and harder time affirming his allegiance to Archbaron Visgalt. He has seen a world outside of the sheer brutality that defines House Visgalt, and he is not certain he can turn his back on it.",
    category: "avatar",
    img: "Revmarza Tlan",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x33D074197b789783A96b12d71F08bf2Ea6ec8fcA",
    type: 67,
    creation: 1655806260,
    name: "Dr. Elmin Kluvik",
    description: "Exiled from Hignös territory for “unethical” medical experiments,  Dr. Kluvik found a far more welcome home for his personal brand of medicine in House Visgalt. Some might call him reckless, or that he puts his own scientific curiosity above the safety of his patients, but it was his experimentation that allowed Archbaron Visgalt to finally sire children. In every sense of the word, the future of House Visgalt is the sole responsibility of Dr. Kluvik.",
    category: "avatar",
    img: "Dr Elmin Kluvik",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0x1e0f53b59B13Ff3A9Ca9E891f81dc2B893E98C4c",
    type: 68,
    creation: 1655806284,
    name: "Sherva Valdo",
    description: "One of the most fearsome Marauders in House Visgalt’s forces, Sherva has won many battles and claimed many, many slaves as tribute for her Archbaron. She is the right-hand of Grand Marauder Zarrakus, and though a Grand Marauder’s lieutenants are expected to plot against him Sherva has been content to bide her time and serve him...for now. Though Zarrakus is fearsome, he is only becoming older, giving Lieutenant Valdo many years to plan her inevitable ascension.",
    category: "avatar",
    img: "Sherva Valdo",
    subCategory: "visgalt",
    rarity: "common"
  },
  {
    address: "0xc446CEcBDd67e110D50F556a9B1eFe42440D1b82",
    type: 69,
    creation: 1655806284,
    name: "Naszul Malefic",
    description: "As the Eyes of the Baroness, Naszul’s ability as an oracle is directed toward Baroness Xoletsa’s desires. This position is of great import and peril. Her visions of a future allow the Baroness to position House Xoletsa for incalculable success. However, she is not the first to hold the title of “Eyes of the Baroness” and the degenerative, corrosive effects of her gifts ensure that Naszul won’t be the last.",
    category: "avatar",
    img: "Naszul Malefic",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0xE984C37Cf44233647Fd37efc9b00eAD0CF0FE1Aa",
    type: 70,
    creation: 1655807070,
    name: "Ectaz",
    description: "Her life is spent in an unaccompanied exodus, wandering in the search of all that the universe holds dear. Ectaz seeks knowledge and proficiency in a quest of perpetual self-improvement. She believes knowledge should be extracted from the source and not just consumed in text. Enhancing herself through bio-tech rituals and literal consumption of knowledge, she leaves a stream of devastation that drips in her wake.",
    category: "avatar",
    img: "Ectaz",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x17c7eDCc3A1176aD78243B19e678024dE4aAB08C",
    type: 71,
    creation: 1655807070,
    name: "Ocuil Rane",
    description: "So many prodigious minds of House Xoletsa have lived and died, taking countless wisdom with them. For Ocuil, this is an unacceptable tragedy. A sacred and dark ceremony brings together the gods of death and understanding, resulting in Ocuil communing with the lost. In pushing the limits of this ritual, Ocuil has even managed to force his consciousness into the past and live out full lives, gaining unmatched insight into the workings of life and death.",
    category: "avatar",
    img: "Ocuil Rane",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0xa75ef2774Ae56a77652ea51EC43727dBbda1044B",
    type: 72,
    creation: 1655807072,
    name: "Namatia",
    description: "Not all magical rituals are a success, and many have outcomes that are unintended. This uncertainty has led to the birth of “ritual speculation,” betting on the likelihood of success and on the probability of rituals reaching the intended consequences. While technically illegal, Namatia found this market to be ripe for exploitation and used her considerable knowledge of all manner of rituals to situate herself as the prime financier of all magical speculation in the galaxy.",
    category: "avatar",
    img: "Namatia",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0xE272d17CB229D3233019AcB7a8De50Fd297F6387",
    type: 73,
    creation: 1655807072,
    name: "Bebrix Darkvein",
    description: "When Baroness Xoletsa first foresaw the coming of the enigmatic and fierce Darkvein, she determined to use his abilities for her own. Gifted from birth with capabilities and desires that made the powerful envious and the deviant sheepish. Once in service of the Baroness, Darkvein was free to dominate and enslave the enemies of the Baroness, bringing more and more unwilling worshipers into her service.",
    category: "avatar",
    img: "Bebrix Darkvein",
    subCategory: "xoletsa",
    rarity: "common"
  },
  {
    address: "0x71BE4653286210d0d7E4AB4dEc0d4A53461EA87a",
    type: 74,
    creation: 1655807339,
    name: "Haini",
    description: "From retinal targeting systems to language decryption chips, Haini oversees the Cybernetic Enhancement and Implementation Initiative. It was Haini that pushed for other members of their house to concentrate on how they can make their mortal bodies better serve their house.. For her, a fully cybernetic citizenry was the only logical path forward if her House is to achieve victory.",
    category: "avatar",
    img: "Haini",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0xf0D133F9e12a85D0554951D45EFb5598f6850f47",
    type: 75,
    creation: 1655807412,
    name: "R'Kozak",
    description: "A retired military general, R’Kozak now heads the Planetary Defense Department. Studying and implementing a wide array of missiles and laser defenses systems, he has garnered favor with the Baron. He has used this influence to push for a different breed of protection, allowing Hignös to embrace a more offensive form of defense…",
    category: "avatar",
    img: "Rkozak",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0x48182Cf83fB37b47004b88927F32c5702E6668C7",
    type: 76,
    creation: 1655807412,
    name: "Mira",
    description: "In all of House Hignös, there isn’t an employee who enjoys her occupation more than Mira. As chief interrogator, she revels in using the endless supply of “information extraction technology” at her disposal. To her subjects, her cheerful attitude is far more terrifying than any method of pain she can inflict on them.",
    category: "avatar",
    img: "Mira",
    subCategory: "hignos",
    rarity: "common"
  },
  {
    address: "0x94E727B883b6543a894765Dc6d04377e789Bb639",
    type: 77,
    creation: 1655807430,
    name: "Stelas",
    description: "The unassuming bodyguard of the Baron is the keeper of a secret whose mystery is only known by the Baron. Stelas is the heir to the title of Baron Hignös. In keeping with Hignös society, he is not an heir by birth, but instead merit. By earning perfect scores in all areas of Service Evaluation Exam, he is the embodiment of all the perfection and efficiency that the Baron has strived to achieve. Now he waits and watches, preparing for his eventual ascension to the title of Baron Hignös.",
    category: "avatar",
    img: "Stelas",
    subCategory: "hignos",
    rarity: "common"
  }
];

module.exports = {
  assets
}