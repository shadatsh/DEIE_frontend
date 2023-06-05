import eq from '../../assets/images/eq.jpeg';
import eq1 from '../../assets/images/eq1.jpg';
import eq2 from '../../assets/images/eq2.jpeg';
import eq3 from '../../assets/images/eq3.jpg';
const labs = [
  {
    id: 1,
    name: "POWER AND HIGH VOLTAGE",
    equipments: [
      {
        id: 1,
        imageURL: eq,
        name: "soldering equipment",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 2,
        labId: 2,
        imageURL: eq1,
        name: "jump cables",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 3,
        imageURL: eq,
        name: "resistors",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 4,
        labId: 2,
        imageURL: eq1,
        name: "multimeter",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 5,
        imageURL: eq,
        name: "Ammeter",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 6,
        labId: 2,
        imageURL: eq1,
        name: "Voltmeter",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 7,
        imageURL: eq,
        name: "Potentiometer",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 8,
        labId: 2,
        imageURL: eq1,
        name: "Breadboards",
        totalCount: 10,
        availableCount: 5,
      },
    ],
  },
  {
    id: 2,
    name: "ELECTRICAL AND ELECTRONIC MEASUREMENT ",
    equipments: [
      {
        id: 1,
        imageURL: eq2,
        name: "Sensors",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 2,
        imageURL: eq3,
        name: "Transducers",
        totalCount: 10,
        availableCount: 5,
      },
    ],
  },

  {
    id: 3,
    name: "NETWORK AND TELECOMMUNICATION ",
    equipments: [
      {
        id: 1,
        imageURL: eq,
        name: "Speaker",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 2,
        imageURL: eq1,
        name: "Spectrum analyzer",
        totalCount: 10,
        availableCount: 5,
      },
    ],
  },
  {
    id: 4,
    name: "UNDERGRADUATE LAB",
    equipments: [
      {
        id: 1,
        imageURL: eq2,
        name: "speedometer",
        totalCount: 10,
        availableCount: 5,
      },
      {
        id: 2,
        imageURL: eq3,
        name: "urekavessel",
        totalCount: 10,
        availableCount: 5,
      },
    ],
  },
];
export default labs;
