import Allergies from "../../components/services/hcArticles/Allergies";
import Arthritis from "../../components/services/hcArticles/Arthritis";
import Asthma from "../../components/services/hcArticles/Asthma";
import Cancer from "../../components/services/hcArticles/Cancer";
import Covid from "../../components/services/hcArticles/Covid";
import Diabetes from "../../components/services/hcArticles/Diabetes";
import DiarrhealDiseases from "../../components/services/hcArticles/DiarrhealDiseases";
import HeartDisease from "../../components/services/hcArticles/HeartDisease";
import HormonalProblemsInFemales from "../../components/services/hcArticles/HormonalProblemsInFemales";
import HormonalProblemsInMales from "../../components/services/hcArticles/HormonalProblemsInMales";
import Hypertension from "../../components/services/hcArticles/Hypertension";
import InfectiousDiseases from "../../components/services/hcArticles/InfectiousDiseases";
import InfertilityFemales from "../../components/services/hcArticles/Infertility-Females";
import InfertilityMales from "../../components/services/hcArticles/Infertility-Males";
import InflammatoryBowelDisease from "../../components/services/hcArticles/InflammatoryBowelDisease";
import KidneyDiseases from "../../components/services/hcArticles/KidneyDiseases";
import LiverDiseases from "../../components/services/hcArticles/LiverDiseases";
import NutritionalDeficiencies from "../../components/services/hcArticles/NutritionalDeficiencies";
import Obesity from "../../components/services/hcArticles/Obesity";
import Pregnancy from "../../components/services/hcArticles/Pregnancy";
import RespiratoryDiseases from "../../components/services/hcArticles/RespiratoryDiseases";
import SkinProblems from "../../components/services/hcArticles/SkinProblems";
import SleepProblems from "../../components/services/hcArticles/SleepProblems";
import Tuberculosis from "../../components/services/hcArticles/Tuberculosis";

export const hcContentData = [
  {
    id: 1,
    title: "Allergies",
    slug: "allergies",
    excerpt: "Allergies can be understood as reactions from the body’s immune system towards typically harmless substances.",
    cover:
      "https://img.freepik.com/free-photo/young-sick-businesswoman-sneezing-tissue-while-working-office_637285-1991.jpg?w=740&t=st=1690021375~exp=1690021975~hmac=f935fae69a87bafec97362458e25a79f63ecc8c69c99f9be6f87b16b3295b4e4",
    component: <Allergies />,
  },
  {
    id: 2,
    title: "Arthritis",
    slug: "arthritis",
    excerpt: "Arthritis is defined as a bone disorder that causes pain and inflammation of joints.",
    cover:
      "https://img.freepik.com/free-photo/man-bent-her-head-grabbed-him-her-after-exercise_1150-22887.jpg?w=740&t=st=1690027449~exp=1690028049~hmac=00294e03195e6ada6be9d052d9471ccd48b183ab177994b831b0a993c08408ae",
    component: <Arthritis />,
  },
  {
    id: 3,
    title: "Asthma",
    slug: "asthma",
    excerpt: "Asthma, a chronic lung disease, usually affects the airways (tubes through which air goes in and out of the lungs),",
    cover:
      "https://img.freepik.com/premium-photo/asthmatic-girl-catching-inhaler-having-asthma-attack-young-woman-having-asthma_459244-462.jpg?w=826",
    component: <Asthma />,
  },
  {
    id: 4,
    title: "Cancer",
    slug: "cancer",
    excerpt: "Our body has numerous cells that grow and divide to make new cells and die in an orderly fashion.",
    cover:
      "https://img.freepik.com/free-photo/doctor-holds-red-ribbon-hiv-awareness-awareness-world-aids-day-world-sexual-health-day_1150-24397.jpg?w=740&t=st=1690029433~exp=1690030033~hmac=1f0a7dc57df540c947d0157b5c018b8a0332209874f5489ef4b44b07283d50d9",
    component: <Cancer />,
  },
  {
    id: 5,
    title: "COVID",
    slug: "covid",
    excerpt: "COVID, also known as Coronavirus is a type of virus that causes respiratory illnesses, ranging",
    cover:
      "https://img.freepik.com/free-photo/closeup-epidemiologist-with-covid19-sample-test-tube_637285-4724.jpg?w=740&t=st=1690030287~exp=1690030887~hmac=93ab3f3766e7e3ce42448c6c3967c30af1d8252a6bf029977d9dc18ada8f0bee",
    component: <Covid />,
  },
  {
    id: 6,
    title: "Diabetes",
    slug: "diabetes",
    excerpt: "Diabetes, commonly referred to as hyperglycaemia, is a chronic (long-lasting) condition characterized by",
    cover:
      "https://img.freepik.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?w=740&t=st=1690030675~exp=1690031275~hmac=99ecfc5e669f67958402bcd6aa41db6360aa913158e02bc732e3ef14dbab17e8",
    component: <Diabetes />,
  },
  {
    id: 7,
    title: "Diarrheal Diseases",
    slug: "diarrheal-diseases",
    excerpt: "Having loose or watery stools more frequently than normal, or at least three times per day,",
    cover:
      "https://img.freepik.com/premium-photo/man-suffering-from-stomach-ache-with-both-palm-around-waistline-show-pain-injury-belly-area_33807-783.jpg?w=826",
    component: <DiarrhealDiseases />,
  },
  {
    id: 8,
    title: "Heart Disease",
    slug: "heart-disease",
    excerpt: "Numerous heart conditions fall under the umbrella term of",
    cover:
      "https://img.freepik.com/premium-photo/man-have-chest-pain-caused-by-heart-disease_228338-317.jpg?w=740",
    component: <HeartDisease />,
  },
  {
    id: 9,
    title: "Hormonal Problems in Females",
    slug: "hormonal-problems-in-females",
    excerpt: "Hormones are secretions that help in the coordination of many bodily functions such as metabolism,",
    cover:
      "https://img.freepik.com/free-photo/aching-young-caucasian-ill-girl-wearing-robe-holding-pack-medical-pills-glass-water-napkin-touching-head-with-closed-eyes-isolated-olive-green-background-with-copy-space_141793-75335.jpg?w=740&t=st=1690030931~exp=1690031531~hmac=4d1be3fa9140cd9a16c3c2d2dc9584c317d69b759d9846d08c871d5f5ff423d5",
    component: <HormonalProblemsInFemales />,
  },
  {
    id: 10,
    title: "Hormonal Problems in Males",
    slug: "hormonal-problems-in-males",
    excerpt: "Hormones are biological chemicals in the body, produced by endocrine glands.",
    cover:
      "https://img.freepik.com/free-photo/man-happy-about-pregnancy-test-result_23-2148354805.jpg?w=740&t=st=1691479802~exp=1691480402~hmac=040e421dfb965f08d6efebd32af290d62b3e42d3d33de6cbde9e8636839eca2a",
    component: <HormonalProblemsInMales />,
  },
  {
    id: 11,
    title: "Hypertension",
    slug: "hypertension",
    excerpt: "Hypertension, also called “High Blood Pressure” is a condition in which the pressure in your blood vessels is higher than",
    cover:
      "https://img.freepik.com/premium-photo/doctor-measures-pressure-patient-during-medical-examination-consultation-hospital_122732-1877.jpg?w=740",
    component: <Hypertension />,
  },
  {
    id: 12,
    title: "Infectious Diseases",
    slug: "infectious-diseases",
    excerpt: "Human diseases caused by pathogenic microorganisms such as viruses, bacteria,",
    cover:
      "https://img.freepik.com/free-vector/realistic-background-with-microscopic-views-various-colorful-virus-cells-vector-illustration_1284-69391.jpg?w=740&t=st=1691481914~exp=1691482514~hmac=f5698eef341cda149b52d756e053916bebde61206d91ac685ccfff62e109ed72",
    component: <InfectiousDiseases />,
  },
  {
    id: 13,
    title: "Infertility (Females)",
    slug: "infertility-in-females",
    excerpt: "Infertility refers to a disease that affects or limits an individual’s capacity to become pregnant and give birth to a child.",
    cover:
      "https://img.freepik.com/free-photo/young-beautiful-woman-red-pajamas-relaxing-bed_141793-47262.jpg?w=740&t=st=1691489688~exp=1691490288~hmac=a2590f45f8befefab2198f6047b210e5f37d5eff71bf2f56af774f6cc0829e9c",
    component: <InfertilityFemales />,
  },
  {
    id: 14,
    title: "Infertility (Males)",
    slug: "infertility-in-males",
    excerpt: "Infertility is a disease related to the reproductive system that impairs the ability to perform the basic function of reproduction.",
    cover:
      "https://img.freepik.com/free-photo/man-with-migraines-holds-her-hand-by-his-nose-bed_1150-26108.jpg?w=740&t=st=1691493184~exp=1691493784~hmac=09d067c8c758ece039f8d97416eac5a540cfca3c1b8cb3dd50eee3dfc75fe927",
    component: <InfertilityMales />,
  },
  {
    id: 15,
    title: "Inflammatory Bowel Disease",
    slug: "inflammatory-bowel-disease",
    excerpt: "Inflammatory bowel disease (IBD) is a chronic condition of the gastrointestinal tract,",
    cover:
      "https://img.freepik.com/premium-photo/man-white-t-shirt-with-stomachache-gray-room_189498-61.jpg?w=740",
    component: <InflammatoryBowelDisease />,
  },
  {
    id: 16,
    title: "Kidney Diseases",
    slug: "kidney-diseases",
    excerpt: "When the kidneys are damaged and unable to filter blood as they should, the condition is referred to as kidney disease.",
    cover:
      "https://img.freepik.com/premium-vector/realistic-red-healthy-whole-half-human-kidneys-front-view_212889-5044.jpg?w=740",
    component: <KidneyDiseases />,
  },
  {
    id: 17,
    title: "Liver Diseases",
    slug: "liver-diseases",
    excerpt: "Conditions that can harm your liver are referred to as liver diseases.",
    cover:
      "https://img.freepik.com/premium-photo/3d-illustration-sick-human-liver-with-cancer-isolated_196911-12.jpg?w=740",
    component: <LiverDiseases />,
  },
  {
    id: 18,
    title: "Nutritional Deficiencies",
    slug: "nutritional-deficiencies",
    excerpt: "Nutrients are crucial elements for growth and immunity. These nutrients are",
    cover:
      "https://img.freepik.com/premium-photo/portrait-young-beautiful-woman-with-tomato-measuring-tape-plate_118454-8700.jpg?w=740",
    component: <NutritionalDeficiencies />,
  },
  {
    id: 19,
    title: "Obesity",
    slug: "obesity",
    excerpt: "Obesity is a complex and chronic disease that can be categorized as having too much body mass",
    cover:
      "https://img.freepik.com/premium-photo/overweight-man-tight-jeans-with-measuring-tape_53476-4227.jpg?w=740",
    component: <Obesity />,
  },
  {
    id: 20,
    title: "Diagnostic Tests During Pregnancy",
    slug: "diagnostic-tests-during-pregnancy",
    excerpt: "Pregnancy is the period during which a fetus develops within a woman's womb/uterus.",
    cover:
      "https://img.freepik.com/premium-photo/preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room-nurse-pierces-patient-s-arm-vein-with-needle-blank-tube_1212-10492.jpg?w=740",
    component: <Pregnancy />,
  },
  {
    id: 21,
    title: "Respiratory Diseases",
    slug: "respiratory-diseases",
    excerpt: "Diseases of the lungs, airways, and other parts of the respiratory system that affect a person's ability to breathe,",
    cover:
      "https://img.freepik.com/premium-photo/handsome-man-coughing-into-his-fist-isolated-white-background-man-about-forty-years-old-had-strong-cough_43780-7129.jpg?w=740",
    component: <RespiratoryDiseases />,
  },
  {
    id: 22,
    title: "Skin Problems",
    slug: "skin-problems",
    excerpt: "Skin problems can be defined as problems that affect the skin of an individual.",
    cover:
      "https://img.freepik.com/premium-photo/cropped-shot-young-womans-face-with-acne-skin-zoom-circle-pimples-red-scars-rash-cheeks_407348-864.jpg?w=740",
    component: <SkinProblems />,
  },
  {
    id: 23,
    title: "Sleep Problems",
    slug: "sleep-problems",
    excerpt: "Sleep problem is a condition that can affect your sleep and overall health and quality of life.",
    cover:
      "https://img.freepik.com/premium-photo/depressed-young-asian-man-sitting-bed-cannot-sleep-from-insomnia_126277-1326.jpg?w=740",
    component: <SleepProblems />,
  },
  {
    id: 24,
    title: "Tuberculosis",
    slug: "tuberculosis",
    excerpt: "Tuberculosis (TB) is a bacterial infection caused by “Mycobacterium tuberculosis” and other related species.",
    cover:
      "https://img.freepik.com/free-photo/young-man-suffering-from-cough-shirt-looking-ill_176474-20423.jpg?w=740&t=st=1691565746~exp=1691566346~hmac=93ac240c74aaed1aafbfee1cf94025993a69e26e856fb529f0cf7f9267dc55e0",
    component: <Tuberculosis />,
  },
];
